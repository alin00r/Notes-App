const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.2.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
    body: {
      descripe: "Note body",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  descripe: "Remove a exist note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  descrioe: "List all notes",
  handler() {
    notes.listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  descrioe: "read a notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
