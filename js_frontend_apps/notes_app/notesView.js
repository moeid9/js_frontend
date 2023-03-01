class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');
    this.buttonEl.addEventListener('click', () => {
      const noteInput = document.querySelector('#note-input').value;
      this.addNewNote(noteInput);
   });
  }

  addNewNote(noteInput) {
    this.model.addNotes(noteInput);
    this.displayNotes();
    this.clearInput()
  }

  clearInput(){
   document.querySelector('#note-input').value='';
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(element =>{
      element.remove();
    });
    const notes = this.model.getNotes()
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

}
  
module.exports = NotesView;