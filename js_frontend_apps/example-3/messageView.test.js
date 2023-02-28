/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const inputEl = document.querySelector('#message-input');
    const buttonEl = document.querySelector('#show-message-button');
    
    inputEl.value = 'This is a test message'

    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual(inputEl.value);
  });

  it('clicks the hide button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const buttonEl2 = document.querySelector('#hide-message-button');
    buttonEl2.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});