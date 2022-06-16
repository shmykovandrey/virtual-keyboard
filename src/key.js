const controlKey = new Set(['Backspace', 'Delete', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft',
  'AltLeft', 'Space', 'AltRight', 'ControlRight', 'MetaLeft'
]);
const alphabetKey = new Set(['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'
]);
const specialSymbol = new Set(['Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash',
  'Slash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
  'Digit8', 'Digit9', 'Digit0'
]);
const diffKey = new Set(['Semicolon', 'Quote', 'Comma', 'Period', 'Backquote']);

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
    if (localStorage.russian === 'false' || localStorage.russian === undefined) {
      this.russian = false;
    } else this.russian = true;
    this.pressed = false;
    this.shifted = false;
    this.capsed = false;
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

  setCapsed() {
    this.capsed = true;
  }

  setUncapsed() {
    this.capsed = false;
  }

  switchLang() {
    this.russian = !this.russian;
    localStorage.russian = this.russian;
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
      case 'ControlLeft':
      case 'Tab':
        div.classList.add('double');
        break;
      case 'Space':
        div.classList.add('space');
        break;
      case 'ControlRight':
      case 'AltLeft':
        div.classList.add('onehalf');
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'Enter':
      case 'CapsLock':
        div.classList.add('doublehalf');
        break;
      case 'Backspace':
        div.classList.add('triple');
        break;
      default:
        div.classList.add('basic_key');
    }
    return div;
  }

  сreateAlphabetSymbol(div) {
    let newDiv = div;
    if (this.russian === false) {
      if (this.capsed) {
        newDiv.textContent = this.keyShiftSymbol;
        return newDiv;
      }
      if (!this.shifted) {
        newDiv.textContent = this.keySymbol;
      } else {
        newDiv.textContent = this.keyShiftSymbol;
      }
    } else {
      if (this.capsed) {
        newDiv.textContent = this.keyLangShiftSymbol;
        return newDiv;
      }
      if (!this.shifted) {
        newDiv.textContent = this.keyLangSymbol;
      } else {
        newDiv.textContent = this.keyLangShiftSymbol;
      }
    }
    return newDiv;
  }

  сreateSpecialSymbol(div) {
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
    let div = document.createElement('button');
    div.classList.add('keyboard__key');
    if (controlKey.has(this.keyName)) {
      div.classList.add('control');
    }
    div = this.isPressed(div);
    div = this.setStyle(div);
    div.setAttribute('id', this.keyName);
    if (alphabetKey.has(this.keyName)) {
      div = this.сreateAlphabetSymbol(div);
      return div;
    }
    if (specialSymbol.has(this.keyName)) {
      div = this.сreateSpecialSymbol(div);
      return div;
    }
    if (diffKey.has(this.keyName)) {
      if (this.russian) {
        div = this.сreateAlphabetSymbol(div);
      } else div = this.сreateSpecialSymbol(div);
      return div;
    }
    div.textContent = this.keySymbol;
    return div;
  }
}
