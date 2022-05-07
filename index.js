import renderMainElemnents from './src/renderMainElements';
import generateAllKeys from './src/generateAllKeys';
const KEYS = generateAllKeys();
const keyPressedMap = new Set();
let capsed = false;
const alphabetKey = new Set(['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'
]);
const specialSymbol = new Set(['Backquote', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash',
  'Semicolon', 'Quote', 'Comma', 'Period', 'Slash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0'
]);

function reRenderKeyBoad() {
  document.querySelector('.keyboard').innerHTML = '';
  KEYS.forEach(key => key.renderKey());
}

function keysPreventDefault(event) {
  if (event.code === 'Tab' || event.code === 'AltRight' || event.code === 'AltLeft') event.preventDefault();
  if (alphabetKey.has(event.code) || specialSymbol.has(event.code)) event.preventDefault();
}

function pressed(event) {
  KEYS.forEach(key => {
    if (key.keyName === event.code) {
      key.setPressed();
    }
  });
}

function unpressed(event) {
  KEYS.forEach(key => key.keyName === event.code && key.setUnpressed());
}

function shifter() {
  KEYS.forEach(key => key.setShifted());
}

function unshifter() {
  KEYS.forEach(key => key.setUnshifted());
}

function isCapsed(event) {
  if (capsed) {
    capsed = false;
    KEYS.forEach(key => key.setUncapsed());
    unpressed(event);
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

function keyDown(event) {
  document.querySelector('.text-area').focus();
  keyPressedMap.add(event.code);
  switchLangCheck();
  keysPreventDefault(event);
  pressed(event);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') shifter();
  reRenderKeyBoad();
}

function keyUp(event) {
  document.querySelector('.text-area').focus();
  keyPressedMap.delete(event.code);
  keysPreventDefault(event);
  if (event.code === 'CapsLock') {
    isCapsed(event);
  } else unpressed(event);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') unshifter();
  reRenderKeyBoad();
}

window.onload = function onloadPage() {
  renderMainElemnents();
  reRenderKeyBoad();
  document.querySelector('.text-area').focus();
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
};
