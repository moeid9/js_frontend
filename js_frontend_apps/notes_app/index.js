const NotesView = require('./notesView')
const NotesModel = require("./notesModel.js");
let model = new NotesModel();

model.addNotes('This is an example note');
const view = new NotesView(model);
view.displayNotes();