import Key from './key';
export default function generateAllKeys() {
  const keyArr = [];
  keyArr.push(new Key('tilda', '~'));
  keyArr.push(new Key('one', '1'));
  keyArr.push(new Key('two', '2'));
  keyArr.push(new Key('three', '3'));
  keyArr.push(new Key('four', '4'));
  keyArr.push(new Key('five', '5'));
  keyArr.push(new Key('six', '6'));
  keyArr.push(new Key('seven', '7'));
  keyArr.push(new Key('eight', '8'));
  keyArr.push(new Key('nine', '9'));
  keyArr.push(new Key('zero', '0'));
  keyArr.push(new Key('minus', '-'));
  keyArr.push(new Key('plus', '+'));
  keyArr.push(new Key('backspace', 'bcsps'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('TAB', 'TAB'));
  keyArr.push(new Key('q', 'q'));
  keyArr.push(new Key('w', 'w'));
  keyArr.push(new Key('e', 'e'));
  keyArr.push(new Key('r', 'r'));
  keyArr.push(new Key('t', 't'));
  keyArr.push(new Key('y', 'y'));
  keyArr.push(new Key('u', 'u'));
  keyArr.push(new Key('i', 'i'));
  keyArr.push(new Key('o', 'o'));
  keyArr.push(new Key('p', 'p'));
  keyArr.push(new Key('[', '['));
  keyArr.push(new Key(']', ']'));
  keyArr.push(new Key('\\', '\\'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('capsLock', 'Caps Lock'));
  keyArr.push(new Key('a', 'a'));
  keyArr.push(new Key('s', 's'));
  keyArr.push(new Key('d', 'd'));
  keyArr.push(new Key('f', 'f'));
  keyArr.push(new Key('g', 'g'));
  keyArr.push(new Key('h', 'h'));
  keyArr.push(new Key('j', 'j'));
  keyArr.push(new Key('k', 'k'));
  keyArr.push(new Key('l', 'l'));
  keyArr.push(new Key(';', ';'));
  keyArr.push(new Key('\'', '\''));
  keyArr.push(new Key('enter', 'enter'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('shift_r', 'shift'));
  keyArr.push(new Key('z', 'z'));
  keyArr.push(new Key('x', 'x'));
  keyArr.push(new Key('c', 'c'));
  keyArr.push(new Key('v', 'v'));
  keyArr.push(new Key('b', 'b'));
  keyArr.push(new Key('n', 'n'));
  keyArr.push(new Key('m', 'm'));
  keyArr.push(new Key(',', ','));
  keyArr.push(new Key('.', '.'));
  keyArr.push(new Key('/', '/'));
  keyArr.push(new Key('shift_l', 'shift'));
  keyArr.push(new Key('key_up', 'up'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('ctrl_r', 'ctrl'));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('empty', ''));
  keyArr.push(new Key('alt_r', 'alt'));
  keyArr.push(new Key('space', 'space'));
  keyArr.push(new Key('alt_l', 'alt'));
  keyArr.push(new Key('ctrl_l', 'ctrl'));
  keyArr.push(new Key('key_left', 'left'));
  keyArr.push(new Key('key_down', 'down'));
  keyArr.push(new Key('key_right', 'right'));
  return keyArr;
}