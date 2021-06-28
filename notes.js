const fs = require("fs");
const chalk = require('chalk');

const loadNotes = () => {
  try {

    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
   catch (e) {
       return [];
   }
};

const getNotes = () => {
  return "Your notes....";
};

const addNotes = (title, body) => {
  const notes = loadNotes();

//   const duplicateNotes = notes.filter( function(note){
//      return note.Title === title
// const duplicateNotes = notes.filter( note => note.Title === title )
const duplicateNote = notes.find(note => note.Title === title)
debugger
  if(!duplicateNote)
  {
    notes.push({
        Title: title,
        Body: body,
      });
      saveNotes(notes);
      console.log(chalk.green.inverse("New Note Added!"))
  }
  
  else{
      console.log(chalk.red.inverse("Title taken"))
  }
  
};

const saveNotes = (notes) => {

  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json",dataJSON)
};

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse("Your Notes"))

    notes.forEach((note) => {
        console.log(note.Title)
        console.log(note.Body)
    })
}

const readNotes = (title) => {
     const notes = loadNotes()
     const note = notes.find((note) => note.Title === title)
     
     if(note)
     {
         console.log(chalk.inverse.blue(note.Title))
         console.log(chalk.inverse.blue(note.Body))
     }
     else
     {
         console.log(chalk.yellow.inverse("Note not found"))
     }
}

const removeNotes = (title) =>
{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        if(note.Title===title)
        {
            console.log(chalk.green.inverse("Note Removed Success!"));     
        }
        else
        {
            console.log(chalk.red.inverse("Note Removal failed"))
        }

        return note.Title !== title
    })
    saveNotes(notesToKeep)

}


module.exports = {
    getNote:getNotes,
    addNote:addNotes,
    saveNote:saveNotes,
    loadNote:loadNotes,
    removeNote:removeNotes,
    listNote:listNotes,
    readNote:readNotes
}