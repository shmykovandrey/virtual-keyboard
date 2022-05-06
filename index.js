// import Key from './src/key';
import renderMainElemnents from './src/renderMainElements';
import generateAllKeys from './src/generateAllKeys';

window.onload = function onloadPage() {
  renderMainElemnents();
  let keyboardArea = document.querySelector('.keyboard');
  const keys = generateAllKeys();
  keys.forEach(key => keyboardArea.append(key.createKeyNode()));
};
