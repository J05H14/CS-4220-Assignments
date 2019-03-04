const args = process.argv
// console.log(args)

// The first element will be the Node.js executable path.
// The second element will be the path to the.js file being executed.
// The remaining elements will be any additional command line arguments.

// Syntax
// node args.js --help

args.splice(0, 2)
console.log(args)

const command = args.shift()
console.log(command)

if (command === '--help')
    doFormatHelp()
else
    doWork()

function doFormatHelp() {
    console.log('explain how to use our app')
}


function doWork() {
    console.log('Execute a command with:')
    console.log(args)
}