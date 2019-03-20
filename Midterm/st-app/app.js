const sportsteams = require('sportsteams')

async function search(teamString = 'los_angeles'){
    const teams = await sportsteams.search(teamString)

    print(teams.teams)
}
const print = (teams) => {
    console.log('=======TEAMS=======')
    teams.forEach(team => {
        console.log(team.strTeam)
    })
}

module.exports = {
    search
}