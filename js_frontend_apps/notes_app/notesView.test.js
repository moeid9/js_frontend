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

  it('clicks the button', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#note-input');
    const buttonEl = document.querySelector('#add-note-button');
    
    inputEl.value = 'This is a test message';

    buttonEl.click();

    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('This is a test message');
  });

  it('refreshes the notes', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNotes("Buy milk");
    model.addNotes("Go to the gym");
    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
