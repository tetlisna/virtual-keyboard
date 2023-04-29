// const keysObj = [

// ];

const keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onkeydown: null,
    onkeyup: null,
  },

  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    const lang = navigator.language || navigator.userLanguage;
    console.log(lang, "lang");

    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard', '1keyboard__hidden');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this._createKeys());
    this.elements.keysContainer.querySelectorAll('.keyboard__key');

    this.elements.main.appendChild(this.elements.keysContainer);

    document.body.appendChild(this.elements.main);

    document.querySelectorAll('.textarea').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          element.value += currentValue;
        });
      });
    });

    document.addEventListener('keydown', this.onkeydown);
    document.addEventListener('keyup', this.onkeyup);
  },

  onkeydown(event) {
    const code = event.code;
    const id = document.getElementById(code);
    id.classList.add('active');
  },

  onkeyup(event) {
    const code = event.code;
    const id = document.getElementById(code);
    id.classList.remove('active');
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();

    const keyLayout = [
      {
        code: 'Backquote',
        value: '`',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit1',
        value: '1',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit2',
        value: '2',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit3',
        value: '3',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit4',
        value: '4',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit5',
        value: '5',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit6',
        value: '6',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit7',
        value: '7',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit8',
        value: '8',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit9',
        value: '9',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Digit0',
        value: '0',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Minus',
        value: '-',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Equal',
        value: '=',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Backspace',
        value: 'Backspace',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Tab',
        value: 'Tab',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyQ',
        value: 'q',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyW',
        value: 'w',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyE',
        value: 'e',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyR',
        value: 'r',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyT',
        value: 't',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyY',
        value: 'y',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyU',
        value: 'u',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyI',
        value: 'i',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyO',
        value: 'o',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyP',
        value: 'p',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'BracketLeft',
        value: '&lsqb;',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'BracketRight',
        value: '&rsqb;',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'BackSlash',
        value: '&bsol;',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Del',
        value: 'Del',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'CapsLock',
        value: 'CapsLock',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyA',
        value: 'a',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyS',
        value: 's',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyD',
        value: 'd',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyF',
        value: 'f',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyG',
        value: 'g',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyH',
        value: 'h',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyJ',
        value: 'j',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyK',
        value: 'k',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyL',
        value: 'l',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Semicolon',
        value: ';',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Quote',
        value: "'",
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Enter',
        value: 'Enter',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'ShiftLeft',
        value: 'Shift',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyZ',
        value: 'z',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyX',
        value: 'x',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyC',
        value: 'c',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyV',
        value: 'v',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyB',
        value: 'b',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyN',
        value: 'n',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'KeyM',
        value: 'm',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Comma',
        value: ',',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Period',
        value: '.',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Slash',
        value: '&sol;',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'ArrowUp',
        value: '&#8593;',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'ShiftRight',
        value: 'Shift',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'ControlLeft',
        value: 'Ctrl',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'MetaLeft',
        value: 'Meta',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'AltLeft',
        value: 'Alt',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'Space',
        value: 'Space',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'AltRight',
        value: 'Alt',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'ArrowLeft',
        value: '&#8592;',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'ArrowDown',
        value: '&#8595;',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'ArrowRight',
        value: '&#8594;',
        valueRu: '',
        valueUk: '',
      },
      {
        code: 'ControlRight',
        value: 'Ctrl',
        valueRu: '',
        valueUk: '',
      },
    ];
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons>${icon_name}</i>`;
    };
    keyLayout.forEach((key) => {
      console.log(key.value, 'keyyyyy');
      const keyElement = document.createElement('button');
      const insertLineBreak =
        ['Backspace', 'Del', 'Enter', 'ShiftRight'].indexOf(key.code) !== -1;
      keyElement.setAttribute('id', `${key.code}`);
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      switch (key.code) {
        case 'Backspace':
          keyElement.classList.add(
            'keyboard__key-wide',
            'keyboard__key-wide-back'
          );
          keyElement.innerText = 'Backspace';
          keyElement.addEventListener('click', () => {
            const textarea = document.querySelector('textarea');
            const pos = textarea.selectionStart;
            const value = textarea.value;
            console.log(pos, 'pos-----');
            //textarea.value.setSelectionRange(pos-1, pos)
            textarea.value = value.slice(0, pos - 1) + value.slice(pos);
            keyElement.blur();
            textarea.focus();
            textarea.selectionStart = pos - 1;
            textarea.selectionEnd = pos - 1;
         
          });

          break;

        case 'Del':
          keyElement.classList.add(
            'keyboard__key-dbl',
            'keyboard__key-wide-back'
          );
          keyElement.innerText = 'Del';
          keyElement.addEventListener('click', () => {
            const textarea = document.querySelector('textarea');
            const pos = textarea.selectionStart;
            const value = textarea.value;
            //textarea.value.setSelectionRange(pos-1, pos)
            textarea.value = value.slice(pos) + value.slice(0, pos - 1);
            keyElement.blur();
            textarea.focus();
            textarea.selectionStart = pos;
           // textarea.selectionEnd = pos;
          });

          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key', 'keyboard__key-dbl');
          keyElement.innerText = 'Tab';

          keyElement.addEventListener('click', () => {
            const keyValue = '    ';
            this.onVirtualKeydown(keyValue, keyElement);
          });

          break;

        case 'CapsLock':
          keyElement.classList.add(
            'keyboard__key-wide',
            'keyboard__key-activatable'
          );
          keyElement.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.innerText = 'CapsLock';
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle(
              'keyboard__key-active',
              this.properties.capsLock
            );
          });
          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('keyboard_return');
          keyElement.innerText = 'Enter';

          keyElement.addEventListener('click', () => {
            const keyValue = '\n';
            this.onVirtualKeydown(keyValue, keyElement);
          });
          break;

        case 'ShiftLeft':
          keyElement.classList.add(
            'keyboard__key',
            'keyboard__key-wide',
            'shift-left'
          );
          keyElement.innerText = 'Shift';
          keyElement.addEventListener('click', () => {
            const keyValue = key.code;
            this.onVirtualKeydown(keyValue, keyElement);

          });

          break;

        case 'ShiftRight':
          keyElement.classList.add(
            'keyboard__key',
            'keyboard__key-wide',
            'shift-right'
          );
          keyElement.innerText = 'Shift';
          keyElement.addEventListener('click', () => {
            const keyValue = key.code;
            this.onVirtualKeydown(keyValue, keyElement);

          });

          break;

          case 'ControlLeft':
          keyElement.classList.add(
            'keyboard__key',
            'keyboard__key-dbl'
          );
          keyElement.innerText = 'Ctrl';
          keyElement.addEventListener('click', () => {
            const keyValue = key.code;
            this.onVirtualKeydown(keyValue, keyElement);

          });

          break;

        case 'ControlRight':
          keyElement.classList.add(
            'keyboard__key',
            'keyboard__key-dbl'
          );
          keyElement.innerText = 'Ctrl';
          keyElement.addEventListener('click', () => {
            const keyValue = key.code;
            this.onVirtualKeydown(keyValue, keyElement);

          });

          break;

        case 'AltLeft':
          keyElement.classList.add('keyboard__key', 'alt-left');
          keyElement.innerText = 'Alt';
          keyElement.addEventListener('click', () => {
            const keyValue = key.code;
            this.onVirtualKeydown(keyValue, keyElement);

          });

          break;

        case 'AltRight':
          keyElement.classList.add('keyboard__key', 'alt-right');
          keyElement.innerText = 'Alt';
          keyElement.addEventListener('click', () => {
            const keyValue = key.code;
            this.onVirtualKeydown(keyValue, keyElement);
          });

          break;

        case 'Space':
          keyElement.classList.add('keyboard__key-extra-wide');
          keyElement.addEventListener('click', () => {
            const keyValue = ' ';
            this.onVirtualKeydown(keyValue, keyElement);
            //this.properties.value = keyValue;
          });

          break;

        case 'Done':
          keyElement.classList.add('keyboard__key-wide', 'keyboard__key-dark');
          keyElement.innerHTML = createIconHTML('check_circle');

          break;

        default:
          keyElement.innerHTML = key.value;

          keyElement.addEventListener('click', () => {
            console.log('Key pressed');
            let keyValue = this.properties.capsLock
              ? key.value.toUpperCase()
              : key.value.toLowerCase();
            //this.properties.value = keyValue;
            this.onVirtualKeydown(keyValue, keyElement);
          });

          break;
      }
      fragment.appendChild(keyElement);
      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });
    return fragment;
  },

  onVirtualKeydown(value, keyElement) {
    const textarea = document.querySelector('textarea');
    textarea.value += value;
    keyElement.blur();
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
    console.log('Event triggered ' + handlerName);
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
    console.log('Event toggled caps lock');
  },

  open(initialValue, oninput, onkeydown) {
    this.properties.values = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onkeydown = onkeydown;
  },

};
window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});
