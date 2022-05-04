export default class Key {
  constructor(name, mainSymbol, altName = name, altSymbol = mainSymbol) {
    this.name = name;
    this.mainSymbol = mainSymbol;
    this.altName = altName;
    this.altSymbol = altSymbol;
  }

  createKeyNode() {
    let div = document.createElement('div');
    div.classList.add('keyboard__key');
    switch (this.name) {
      case 'backspace':
      case 'enter':
      case 'capsLock':
      case 'shift_l':
      case 'shift_r':
      case 'ctrl_l':
        div.classList.add('double');
        break;
      case 'space':
        div.classList.add('space');
        break;
      case 'empty':
        div.classList.add('keyboard_empty');
        break;
      case 'ctrl_r':
      case '\\':
      case 'TAB':
        div.classList.add('onehalf');
        break;
      default:
        div.classList.add('basic_key');
    }
    div.textContent = this.mainSymbol;
    return div;
  }
}
