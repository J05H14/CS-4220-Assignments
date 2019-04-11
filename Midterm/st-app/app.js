const sportsteams = require('sportsteams')
const inquirer = require('inquirer')

async function search(teamString){
    const searchResult = await sportsteams.search(teamString)
    const teams = searchResult.teams

    teamsLogo()

    // console.log(teams)
    const selectedTeam = await lookupPrompt(teams)

    lookup(selectedTeam.teams)

    // print(teams)
}

async function lookupPrompt(result){

    const showTeams = result.map(team => {
        return {name: team.strTeam, value: team.idTeam}
    })
    

    return inquirer.prompt([{
        type: 'list',
        message: 'Select a Team for Details',
        name: 'teams',
        choices: showTeams,
        validate: showTeams => {
            if (showTeams == null){
                return 'No Teams matching your search'
            }
            else{
                return true;
            }
        }
    }])
}

async function lookup(id){
    const result = await sportsteams.lookup(id)

    const team = result.teams[0]

    print(team)
    // console.log(team)
}

const print = (team) => {
    console.log(`Team Name: ${team.strTeam}\t League: ${team.strLeague}`)
    console.log('-----------------------------------')
    console.log(team.strStadiumLocation != null ? `Home City: ${team.strStadiumLocation}` : 'Home City: Not Available')
    console.log('-----------------------------------')
    console.log(team.intFormedYear != null ? `Year Formed: ${team.intFormedYear}` : 'Year Formed: Not Available')
    console.log('-----------------------------------')
    console.log(team.strManager != '' ? `Current Coach: ${team.strManager}` : 'Current Coach: Not Available');
    console.log('-----------------------------------')
    console.log(team.strStadium != null ? `Current Stadium: ${team.strStadium}` : 'Current Stadium: Not Available')
    console.log('-----------------------------------')
    console.log(team.strDescriptionEN != null ? `Description:\n${team.strDescriptionEN}` : 'Description: Not Available')
    // teams.forEach(team => {
    //     console.log(`Name: ${team.strTeam}\nLeague: ${team.strLeague}\nID: ${team.idTeam}`)
    //     console.log('____________________________________________________________________________________________________\n')
    // })
}

const teamsLogo = () => {
    console.log(
        ' .----------------.  .----------------.  .----------------.  .----------------.  .----------------. ' +
        '\n| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |' +
        '\n| |  _________   | || |  _________   | || |      __      | || | ____    ____ | || |    _______   | |' +
        '\n| | |  _   _  |  | || | |_   ___  |  | || |     /  \\     | || ||_   \\  /   _|| || |   /  ___  |  | |' +
        '\n| | |_/ | | \\_|  | || |   | |_  \\_|  | || |    / /\\ \\    | || |  |   \\/   |  | || |  |  (__ \\_|  | |' +
        '\n| |     | |      | || |   |  _|  _   | || |   / ____ \\   | || |  | |\\  /| |  | || |   \'.___`-.   | |' +
        '\n| |    _| |_     | || |  _| |___/ |  | || | _/ /    \\ \\_ | || | _| |_\\/_| |_ | || |  |`\\____) |  | |' +
        '\n| |   |_____|    | || | |_________|  | || ||____|  |____|| || ||_____||_____|| || |  |_______.\'  | |' +
        '\n| |              | || |              | || |              | || |              | || |              | |' +
        '\n| \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' || \'--------------\' |' +
        '\n \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\'  \'----------------\'' )
    console.log(' __________________________________________________________________________________________________\n|__________________________________________________________________________________________________|\n')

}
module.exports = {
    search,
    // logo
}