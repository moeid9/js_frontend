class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonEl2 = document.querySelector('#hide-message-button');
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.buttonEl2.addEventListener('click', () => {
      this.clearMessage();
   });
  }

  displayMessage() {
    
    const message = document.querySelector('#message-input').value;

    const messageElement = document.createElement('div');
    messageElement.innerText = (message);
    messageElement.id = 'message';
    document.querySelector('#main-container').append(messageElement);
  }

  clearMessage(){
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;