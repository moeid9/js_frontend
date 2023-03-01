const NotesView = require('./notesView');
const NotesModel = require("./notesModel.js");
let model = new NotesModel();


const view = new NotesView(model);
