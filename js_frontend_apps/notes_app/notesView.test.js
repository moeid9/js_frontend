/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel')
const NotesView = require('./notesView');

describe('Notes view', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 2 Notes', () => {
    // 1: set up
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNotes("Buy milk");
    model.addNotes("Go to the gym");
    // 2: display on html page
    view.displayNotes();
    // 3: page should have 2 notes
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
