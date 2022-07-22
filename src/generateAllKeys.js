import Key from './key';
export default function generateAllKeys() {
  const keyArr = [];
  keyArr.push(new Key('Backquote', '`', '~', 'ё', 'Ё'));
  keyArr.push(new Key('Digit1', '1', '!', '1', '!'));
  keyArr.push(new Key('Digit2', '2', '@', '2', '"'));
  keyArr.push(new Key('Digit3', '3', '#', '3', '№'));
  keyArr.push(new Key('Digit4', '4', '$', '4', ';'));
  keyArr.push(new Key('Digit5', '5', '%', '5', '%'));
  keyArr.push(new Key('Digit6', '6', '^', '6', ':'));
  keyArr.push(new Key('Digit7', '7', '&', '7', '?'));
  keyArr.push(new Key('Digit8', '8', '*', '8', '*'));
  keyArr.push(new Key('Digit9', '9', '(', '9', '('));
  keyArr.push(new Key('Digit0', '0', ')', '0', ')'));
  keyArr.push(new Key('Minus', '-', '_'));
  keyArr.push(new Key('Equal', '=', '+'));
  keyArr.push(new Key('Backspace', 'bcsps'));
  keyArr.push(new Key('Tab', 'tab'));
  keyArr.push(new Key('KeyQ', 'q', 'Q', 'й', 'Й'));
  keyArr.push(new Key('KeyW', 'w', 'W', 'ц', 'Ц'));
  keyArr.push(new Key('KeyE', 'e', 'E', 'у', 'У'));
  keyArr.push(new Key('KeyR', 'r', 'R', 'к', 'К'));
  keyArr.push(new Key('KeyT', 't', 'T', 'е', 'Е'));
  keyArr.push(new Key('KeyY', 'y', 'Y', 'н', 'Н'));
  keyArr.push(new Key('KeyU', 'u', 'U', 'г', 'Г'));
  keyArr.push(new Key('KeyI', 'i', 'I', 'ш', 'Ш'));
  keyArr.push(new Key('KeyO', 'o', 'O', 'щ', 'Щ'));
  keyArr.push(new Key('KeyP', 'p', 'P', 'з', 'З'));
  keyArr.push(new Key('BracketLeft', '[', '{'));
  keyArr.push(new Key('BracketRight', ']', '}'));
  keyArr.push(new Key('Backslash', '\\', '|', '\\', '/'));
  keyArr.push(new Key('Delete', 'del'));
  keyArr.push(new Key('CapsLock', 'caps lock'));
  keyArr.push(new Key('KeyA', 'a', 'A', 'ф', 'Ф'));
  keyArr.push(new Key('KeyS', 's', 'S', 'ы', 'Ы'));
  keyArr.push(new Key('KeyD', 'd', 'D', 'в', 'В'));
  keyArr.push(new Key('KeyF', 'f', 'F', 'а', 'А'));
  keyArr.push(new Key('KeyG', 'g', 'G', 'п', 'П'));
  keyArr.push(new Key('KeyH', 'h', 'H', 'р', 'Р'));
  keyArr.push(new Key('KeyJ', 'j', 'J', 'о', 'О'));
  keyArr.push(new Key('KeyK', 'k', 'K', 'л', 'Л'));
  keyArr.push(new Key('KeyL', 'l', 'L', 'д', 'Д'));
  keyArr.push(new Key('Semicolon', ';', ':', 'ж', 'Ж'));
  keyArr.push(new Key('Quote', '\'', '"', 'э', 'Э'));
  keyArr.push(new Key('Enter', 'enter'));
  keyArr.push(new Key('ShiftLeft', 'shift'));
  keyArr.push(new Key('KeyZ', 'z', 'Z', 'я', 'Я'));
  keyArr.push(new Key('KeyX', 'x', 'X', 'ч', 'Ч'));
  keyArr.push(new Key('KeyC', 'c', 'C', 'с', 'С'));
  keyArr.push(new Key('KeyV', 'v', 'V', 'м', 'М'));
  keyArr.push(new Key('KeyB', 'b', 'B', 'и', 'И'));
  keyArr.push(new Key('KeyN', 'n', 'N', 'т', 'Т'));
  keyArr.push(new Key('KeyM', 'm', 'M', 'ь', 'Ь'));
  keyArr.push(new Key('Comma', ',', '<', 'б', 'Б'));
  keyArr.push(new Key('Period', '.', '>', 'ю', 'Ю'));
  keyArr.push(new Key('Slash', '/', '?', '.', ','));
  keyArr.push(new Key('ArrowUp', '↑'));
  keyArr.push(new Key('ShiftRight', 'shift'));
  keyArr.push(new Key('ControlLeft', 'ctrl'));
  keyArr.push(new Key('MetaLeft', 'win'));
  keyArr.push(new Key('AltLeft', 'alt'));
  keyArr.push(new Key('Space', 'space'));
  keyArr.push(new Key('AltRight', 'alt'));
  keyArr.push(new Key('ArrowLeft', '←'));
  keyArr.push(new Key('ArrowDown', '↓'));
  keyArr.push(new Key('ArrowRight', '→'));
  keyArr.push(new Key('ControlRight', 'ctrl'));
  return keyArr;
}