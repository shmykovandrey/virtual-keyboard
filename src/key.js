const controlKey = new Set(['Backspace', 'Delete', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft',
  'AltLeft', 'Space', 'AltRight', 'ControlRight'
]);
const alphabetKey = new Set(['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'
]);
const specialSymbol = new Set(['Backquote', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash',
  'Semicolon', 'Quote', 'Comma', 'Period', 'Slash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0'
]);

export default class Key {
  constructor(
    keyName,
    keySymbol,
    keyShiftSymbol = keySymbol,
    keyLangSymbol = keySymbol,
    keyLangShiftSymbol = keySymbol
  ) {
    this.keyName = keyName; // BracketLeft
    this.keySymbol = keySymbol; // [
    this.keyShiftSymbol = keyShiftSymbol;
    this.keyLangSymbol = keyLangSymbol;
    this.keyLangShiftSymbol = keyLangShiftSymbol;
    this.russian = false;
    this.pressed = false;
    this.shifted = false;
  }

  setPressed() {
    this.pressed = true;
  }

  setUnpressed() {
    this.pressed = false;
  }

  setShifted() {
    this.shifted = true;
  }

  setUnshifted() {
    this.shifted = false;
  }

  renderKey() {
    const domParrent = document.querySelector('.keyboard');
    domParrent.append(this.createTemplate());
  }

  isPressed(div) {
    if (this.pressed) {
      div.classList.add('click');
    } else {
      div.classList.remove('click');
    }
    return div;
  }

  setStyle(div) {
    switch (this.keyName) {
      case 'Backspace':
      case 'Enter':
      case 'CapsLock':
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'ControlLeft':
        div.classList.add('double');
        break;
      case 'Space':
        div.classList.add('space');
        break;
      case 'empty':
        div.classList.add('keyboard_empty');
        break;
      case 'ControlRight':
      case 'Backslash':
      case 'Tab':
        div.classList.add('onehalf');
        break;
      default:
        div.classList.add('basic_key');
    }
    return div;
  }

  сreateShiftedSymbol(div) {
    let newDiv = div;
    if (this.russian === false) {
      if (!this.shifted) {
        newDiv.textContent = this.keySymbol;
      } else {
        newDiv.textContent = this.keyShiftSymbol;
      }
    } else if (!this.shifted) {
      newDiv.textContent = this.keyLangSymbol;
    } else {
      newDiv.textContent = this.keyLangShiftSymbol;
    }
    return newDiv;
  }

  createTemplate() {
    let div = document.createElement('div');
    div.classList.add('keyboard__key');
    if (controlKey.has(this.keyName)) {
      div.classList.add('control');
    }
    div = this.isPressed(div);
    div = this.setStyle(div);
    if (alphabetKey.has(this.keyName)) {
      div = this.сreateShiftedSymbol(div);
      return div;
    }
    if (specialSymbol.has(this.keyName)) {
      div = this.сreateShiftedSymbol(div);
      return div;
    }
    div.textContent = this.keySymbol;
    return div;
  }
}
