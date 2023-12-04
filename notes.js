const chalk = require("chalk");
const fs = require("fs");

// Add Note Function
const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });
  const duplicateNote = notes.find((note) => note.title === title);
  // debugger;
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

// Remove Note Function
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("Note not found !!"));
  }

  saveNotes(notesToKeep);
};
// Display All Notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes : "));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

// Search for a note by its title
const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not Found !"));
  }
};
// Write in the file note
const saveNotes = (notes) => {
  try {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJson);
  } catch (e) {
    return `Error saving the note `;
  }
};

// Read from file note
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
