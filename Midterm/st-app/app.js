const sportsteams = require('sportsteams')
const inquirer = require('inquirer')

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

    console.log(id)
    console.log(team)
}

async function search(teamString){
    const searchResult = await sportsteams.search(teamString)
    const teams = searchResult.teams

    teamsLogo()

    // console.log(teams)
    const selectedTeam = await lookupPrompt(teams)

    lookup(selectedTeam.teams)

    // print(teams)
}
const print = (teams) => {
        
    teams.forEach(team => {
        console.log(`Name: ${team.strTeam}\nLeague: ${team.strLeague}\nID: ${team.idTeam}`)
        console.log('____________________________________________________________________________________________________\n')
    })
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