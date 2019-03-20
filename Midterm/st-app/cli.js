const app = require('./app')
const yargs = require('yargs')

const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'search for a team by its name',
        // alias: 's',
        builder: (yargs) => {
            return yargs.option('t', {
                alias: 'team',
                describe: 'name of the team you are searching for'
            })
        },
        handler: (argv) => {app.search(argv.team)}
    })
    .help('help')
    .argv