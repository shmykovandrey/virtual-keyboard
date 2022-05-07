// import Key from './src/key';
import renderMainElemnents from './src/renderMainElements';
import generateAllKeys from './src/generateAllKeys';
const KEYS = generateAllKeys();
const keyPressedMap = new Set();

function reRenderKeyBoad() {
  document.querySelector('.keyboard').innerHTML = '';
  KEYS.forEach(key => key.renderKey());
}

function keysPreventDefault(event) {
  if (event.code === 'Tab' || event.code === 'AltRight' || event.code === 'AltLeft') event.preventDefault();
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

function keyDown(event) {
  keyPressedMap.add(event.code);
  keysPreventDefault(event);
  pressed(event);
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') shifter();
  reRenderKeyBoad();
}

function keyUp(event) {
  keyPressedMap.delete(event.code);
  keysPreventDefault(event);
  unpressed(event);
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
