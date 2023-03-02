const NotesView = require('./notesView');
const NotesModel = require("./notesModel");
const NotesClient = require('./notesClient')

const model = new NotesModel();
const client = new NotesClient();

const view = new NotesView(model, client);
