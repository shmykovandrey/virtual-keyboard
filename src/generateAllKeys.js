import Key from './key';
export default function generateAllKeys() {
  const keyArr = [];
  keyArr.push(new Key('Backquote', '`', '~'));
  keyArr.push(new Key('Digit1', '1', '!'));
  keyArr.push(new Key('Digit2', '2', '@'));
  keyArr.push(new Key('Digit3', '3', '#'));
  keyArr.push(new Key('Digit4', '4', '$'));
  keyArr.push(new Key('Digit5', '5', '%'));
  keyArr.push(new Key('Digit6', '6', '^'));
  keyArr.push(new Key('Digit7', '7', '&'));
  keyArr.push(new Key('Digit8', '8', '*'));
  keyArr.push(new Key('Digit9', '9', '('));
  keyArr.push(new Key('Digit0', '0', ')'));
  keyArr.push(new Key('Minus', '-', '_'));
  keyArr.push(new Key('Equal', '=', '+'));
  keyArr.push(new Key('Backspace', 'bcsps'));
  keyArr.push(new Key('Delete', 'del'));
  keyArr.push(new Key('Tab', 'tab'));
  keyArr.push(new Key('KeyQ', 'q', 'Q'));
  keyArr.push(new Key('KeyW', 'w', 'W'));
  keyArr.push(new Key('KeyE', 'e', 'E'));
  keyArr.push(new Key('KeyR', 'r', 'R'));
  keyArr.push(new Key('KeyT', 't', 'T'));
  keyArr.push(new Key('KeyY', 'y', 'Y'));
  keyArr.push(new Key('KeyU', 'u', 'U'));
  keyArr.push(new Key('KeyI', 'i', 'I'));
  keyArr.push(new Key('KeyO', 'o', 'O'));
  keyArr.push(new Key('KeyP', 'p', 'P'));
  keyArr.push(new Key('BracketLeft', '[', '{'));
  keyArr.push(new Key('BracketRight', ']', '}'));
  keyArr.push(new Key('Backslash', '\\', '|'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('CapsLock', 'caps lock'));
  keyArr.push(new Key('KeyA', 'a', 'A'));
  keyArr.push(new Key('KeyS', 's', 'S'));
  keyArr.push(new Key('KeyD', 'd', 'D'));
  keyArr.push(new Key('KeyF', 'f', 'F'));
  keyArr.push(new Key('KeyG', 'g', 'G'));
  keyArr.push(new Key('KeyH', 'h', 'H'));
  keyArr.push(new Key('KeyJ', 'j', 'J'));
  keyArr.push(new Key('KeyK', 'k', 'K'));
  keyArr.push(new Key('KeyL', 'l', 'L'));
  keyArr.push(new Key('Semicolon', ';', ':'));
  keyArr.push(new Key('Quote', '\'', '"'));
  keyArr.push(new Key('Enter', 'enter'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('ShiftLeft', 'shift'));
  keyArr.push(new Key('KeyZ', 'z', 'Z'));
  keyArr.push(new Key('KeyX', 'x', 'X'));
  keyArr.push(new Key('KeyC', 'c', 'C'));
  keyArr.push(new Key('KeyV', 'v', 'V'));
  keyArr.push(new Key('KeyB', 'b', 'B'));
  keyArr.push(new Key('KeyN', 'n', 'N'));
  keyArr.push(new Key('KeyM', 'm', 'M'));
  keyArr.push(new Key('Comma', ',', '<'));
  keyArr.push(new Key('Period', '.', '>'));
  keyArr.push(new Key('Slash', '/', '?'));
  keyArr.push(new Key('ShiftRight', 'shift'));
  keyArr.push(new Key('ArrowUp', '↑'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('ControlLeft', 'ctrl'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('AltLeft', 'alt'));
  keyArr.push(new Key('Space', 'space'));
  keyArr.push(new Key('AltRight', 'alt'));
  keyArr.push(new Key('ControlRight', 'ctrl'));
  keyArr.push(new Key('ArrowLeft', '←'));
  keyArr.push(new Key('ArrowDown', '↓'));
  keyArr.push(new Key('ArrowRight', '→'));
  return keyArr;
}
