import renderMainElemnents from './src/renderMainElements';
import generateAllKeys from './src/generateAllKeys';
const KEYS = generateAllKeys();
const keyPressedMap = new Set();
let capsed = false;
const alphabetKey = new Set(['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY',
  'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'
]);
const specialSymbol = new Set(['Backquote', 'Minus', 'Equal', 'BracketLeft',
  'BracketRight', 'Backslash', 'Semicolon', 'Quote', 'Comma', 'Period', 'Slash',
  'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0'
]);

function reRenderKeyBoard() {
  let keyboard = document.querySelector('.keyboard');
  keyboard.innerHTML = '';
  KEYS.forEach(key => key.renderKey());
}

function keysPreventDefault(event) {
  if (event.code === 'Enter' || event.code === 'Tab' || event.code === 'AltRight' || event.code === 'AltLeft' || event.code === 'Backspace' || event.code === 'Delete') event.preventDefault();
  if (alphabetKey.has(event.code) || specialSymbol.has(event.code)) event.preventDefault();
}

function pressed(keyName) {
  KEYS.forEach(key => {
    if (key.keyName === keyName) {
      key.setPressed();
    }
  });
}

function unpressed(keyName) {
  KEYS.forEach(key => key.keyName === keyName && key.setUnpressed());
}

function shifter() {
  KEYS.forEach(key => key.setShifted());
}

function unshifter() {
  KEYS.forEach(key => key.setUnshifted());
}

function isCapsed(keyName) {
  if (capsed) {
    capsed = false;
    KEYS.forEach(key => key.setUncapsed());
    unpressed(keyName);
  } else {
    capsed = true;
    KEYS.forEach(key => key.setCapsed());
  }
}

function switchLangCheck() {
  if ((keyPressedMap.has('ShiftLeft') || keyPressedMap.has('ShiftRight')) && (keyPressedMap.has('ControlLeft') || keyPressedMap.has('ControlRight'))) {
    KEYS.forEach(key => key.switchLang());
  }
}

function printKey(key) {
  const textArea = document.querySelector('.text-area');
  if (key === 'Enter') {
    textArea.setRangeText('\n');
    textArea.selectionEnd += 1;
    textArea.selectionStart += 1;
    return;
  }
  if (key === 'Space') {
    textArea.setRangeText(' ');
    textArea.selectionEnd += 1;
    textArea.selectionStart += 1;
    return;
  }
  if (key === 'Tab') {
    textArea.setRangeText('    ');
    textArea.selectionEnd += 4;
    textArea.selectionStart += 4;
    return;
  }
  if (key === 'Backspace') {
    textArea.selectionStart -= 1;
    textArea.setRangeText('');
    return;
  }
  if (key === 'Delete') {
    textArea.selectionEnd += 1;
    textArea.setRangeText('');
    return;
  }
  if (alphabetKey.has(key) || specialSymbol.has(key)) {
    textArea.setRangeText(document.querySelector('#' + key).innerHTML);
    textArea.selectionEnd += 1;
    textArea.selectionStart += 1;
  }
}

function printArrowKey(arrow) {
  const textArea = document.querySelector('.text-area');
  textArea.setRangeText(document.querySelector('#' + arrow).innerText);
  textArea.selectionEnd += 1;
  textArea.selectionStart += 1;
}

function keyDown(event) {
  document.querySelector('.text-area').focus();
  keyPressedMap.add(event.code);
  switchLangCheck();
  keysPreventDefault(event);
  pressed(event.code);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') shifter();
  reRenderKeyBoard();
  printKey(event.code);
}

function keyUp(event) {
  document.querySelector('.text-area').focus();
  keyPressedMap.delete(event.code);
  keysPreventDefault(event);
  if (event.code === 'CapsLock') {
    isCapsed(event.code);
  } else unpressed(event.code);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') unshifter();
  reRenderKeyBoard();
}

function mouseDown(event) {
  document.querySelector('.text-area').focus();
  if (event.target.class !== 'keyboard') {
    pressed(event.target.id);
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') shifter();
    reRenderKeyBoard();
    if (event.target.id === 'ArrowUp' || event.target.id === 'ArrowDown' || event.target.id === 'ArrowLeft' || event.target.id === 'ArrowRight') printArrowKey(event.target.id);
    printKey(event.target.id);
  }
}

function mouseUp(event) {
  document.querySelector('.text-area').focus();
  if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') unshifter();
  if (event.target.id === 'CapsLock') {
    isCapsed(event.target.id);
  } else KEYS.filter(key => key.keyName !== 'CapsLock').forEach(key => unpressed(key.keyName));
  reRenderKeyBoard();
}

window.onload = function onloadPage() {
  renderMainElemnents();
  reRenderKeyBoard();
  document.querySelector('.text-area').focus();
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
  let keyboard = document.querySelector('.keyboard');
  keyboard.addEventListener('mousedown', mouseDown);
  keyboard.addEventListener('mouseup', mouseUp);
};
