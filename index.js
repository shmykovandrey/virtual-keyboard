// import Key from './src/key';
import renderMainElemnents from './src/renderMainElements';
import generateAllKeys from './src/generateAllKeys';
const BODY = document.querySelector('body');

window.onload = function onloadPage() {
  BODY.append(renderMainElemnents());
  let keyboardArea = document.querySelector('.keyboard');
  const keys = generateAllKeys();
  keys.forEach(key => keyboardArea.append(key.createKeyNode()));
};
