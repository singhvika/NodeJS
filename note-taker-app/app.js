console.log("starting main app");

console.log("initialising dependencies");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const noteUtils = require('notes.js');

const noteTitleTemplate = {
  describe: 'title of the note',
  demand: true,
  alias: 't'
}
const noteBodyTemplate = {
  describe: 'body of the note',
  demand: true,
  alias: 'b'
}



const argv = yargs
.command('add', 'Add a new Note', {
  title: noteTitleTemplate,
  body: noteBodyTemplate
})
.command('remove', 'Remove a note', {
  title: noteTitleTemplate
})
.command('read', 'Read a note by title',{
  title: noteTitleTemplate
})
.help()
.argv;

var command = argv._[0];

switch (command) {
  case 'add': {
    console.log("you have selected to add a note");
    let noteTitle = argv.title;
    let noteBody = argv.body;
    let newNote = noteUtils.addNote(noteTitle, noteBody);
    console.log(newNote);
    break;
  }
  case 'remove': {
      console.log("you have selected to remove a note")
      let noteTitle = argv.title;
      noteUtils.removeNote(noteTitle);
    break;
  }
  case 'read': {
    console.log("you have selected to read a note by title");
    let noteTitle = argv.title;
    let note = noteUtils.getNote(noteTitle);
    console.log("---");
    console.log(note);
  }
  case 'list': {
    console.log("you have selected to list all notes");
  }
  default:
  console.log("please enter a valid option");

}
