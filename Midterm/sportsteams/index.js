const config = require('./config')
const superagent = require('superagent')

const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

exports.search = (teamString) => {
    return _fetch(`searchteams.php?t=${teamString}`)
}

exports.lookup = (teamId) => {
    return _fetch(`lookupteam.php?id=${teamId}`)
}