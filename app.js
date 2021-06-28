const chalk = require('chalk')
const yargs = require('yargs');
const notes = require('./notes');


// Customize yargs version
yargs.version('1.1.0');
// console.log(process.argv);


//Create add command

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
           describe: 'This is a title',
           demandOption: true,
           type: 'string'
        },
        body: {
            describe: ' This is a body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv)
    {
       notes.addNote(argv.title,argv.body)
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'To remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: "This is to list notes",
    handler() {
        notes.listNote()
    }
})

yargs.command({
    command:'read',
    describe: 'This is to read a note',
    builder: {
        title: {
        describe: 'This is a title',
        demandOption: true,
        type: 'string'
        }        
    },
    handler(argv){
       notes.readNote(argv.title)
    }
})

yargs.parse();

// Command to list notes


