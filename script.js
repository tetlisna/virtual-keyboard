const keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  // eventHandlers: {
  //   oninput: null,
  //   onkeydown: null,
  //   onkeyup: null,
  // },

  properties: {
    value: '',
    currLang: 'En',
    capsLock: false,
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard', '1keyboard__hidden');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this._createKeys());
    this.elements.keysContainer.querySelectorAll('.keyboard__key');
    this.elements.keys =
      this.elements.keysContainer.querySelectorAll('.keyboard__letters');

    this.elements.main.appendChild(this.elements.keysContainer);

    document.body.appendChild(this.elements.main);

    document.querySelectorAll('.textarea').forEach((element) => {
      element.addEventListener('focus', (e, curr) => {
        this.properties.values = e || '';
        e.value += curr;
        // this.open(element.value, (currentValue) => {
        //   element.value += currentValue;
        // });
      });
    });

    document.addEventListener('keydown', this.onkeydown);
    document.addEventListener('keyup', this.onkeyup);
    document.addEventListener('keydown', this.onclickAltShift);
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
        shiftEn: '~',
        shiftUk: 'Ґ',
        shiftRu: '[]',
      },
      {
        code: 'Digit1',
        value: '1',
        shiftEn: '!',
        shiftUk: '',
      },
      {
        code: 'Digit2',
        value: '2',
        shiftEn: '"',
        shiftUk: '@',
        shiftRu: '@',
      },
      {
        code: 'Digit3',
        value: '3',
        shiftEn: '#',
        shiftRu: '№',
        shiftUk: '№',
      },
      {
        code: 'Digit4',
        value: '4',
        shiftEn: '$',
        shiftUk: ';',
        shiftRu: '%',
      },
      {
        code: 'Digit5',
        value: '5',
        shiftEn: '%',
        shiftUk: '%',
        shiftRu: ':',
      },
      {
        code: 'Digit6',
        value: '6',
        shiftEn: '^',
        shiftUk: ':',
        shiftRu: ',',
      },
      {
        code: 'Digit7',
        value: '7',
        shiftEn: '&',
        shiftRu: '.',
        shiftUk: '?',
      },
      {
        code: 'Digit8',
        value: '8',
        shiftEn: '*',
        shiftUk: ';',
      },
      {
        code: 'Digit9',
        value: '9',
        shiftEn: '(',
      },
      {
        code: 'Digit0',
        value: '0',
        shiftEn: ')',
      },
      {
        code: 'Minus',
        value: '-',
        shiftEn: '_',
      },
      {
        code: 'Equal',
        value: '=',
        shiftEn: '+',
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
        valueRu: 'й',
        valueUk: 'й',
      },
      {
        code: 'KeyW',
        value: 'w',
        valueRu: 'ц',
        valueUk: 'ц',
      },
      {
        code: 'KeyE',
        value: 'e',
        valueRu: 'у',
        valueUk: 'у',
      },
      {
        code: 'KeyR',
        value: 'r',
        valueRu: 'к',
        valueUk: 'к',
      },
      {
        code: 'KeyT',
        value: 't',
        valueRu: 'е',
        valueUk: 'е',
      },
      {
        code: 'KeyY',
        value: 'y',
        valueRu: 'н',
        valueUk: 'н',
      },
      {
        code: 'KeyU',
        value: 'u',
        valueRu: 'г',
        valueUk: 'г',
      },
      {
        code: 'KeyI',
        value: 'i',
        valueRu: 'ш',
        valueUk: 'ш',
      },
      {
        code: 'KeyO',
        value: 'o',
        valueRu: 'щ',
        valueUk: 'щ',
      },
      {
        code: 'KeyP',
        value: 'p',
        valueRu: 'з',
        valueUk: 'з',
      },
      {
        code: 'BracketLeft',
        value: '&lsqb;',
        valueRu: 'х',
        valueUk: 'х',
      },
      {
        code: 'BracketRight',
        value: '&rsqb;',
        valueRu: 'ъ',
        valueUk: 'ї',
      },
      {
        code: 'BackSlash',
        value: '&bsol;',
        valueRu: 'ё',
        valueUk: 'ʼ',
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
        valueRu: 'ф',
        valueUk: 'ф',
      },
      {
        code: 'KeyS',
        value: 's',
        valueRu: 'ы',
        valueUk: 'і',
      },
      {
        code: 'KeyD',
        value: 'd',
        valueRu: 'в',
        valueUk: 'в',
      },
      {
        code: 'KeyF',
        value: 'f',
        valueRu: 'а',
        valueUk: 'а',
      },
      {
        code: 'KeyG',
        value: 'g',
        valueRu: 'п',
        valueUk: 'п',
      },
      {
        code: 'KeyH',
        value: 'h',
        valueRu: 'р',
        valueUk: 'р',
      },
      {
        code: 'KeyJ',
        value: 'j',
        valueRu: 'о',
        valueUk: 'о',
      },
      {
        code: 'KeyK',
        value: 'k',
        valueRu: 'л',
        valueUk: 'л',
      },
      {
        code: 'KeyL',
        value: 'l',
        valueRu: 'д',
        valueUk: 'д',
      },
      {
        code: 'Semicolon',
        value: ';',
        valueRu: 'ж',
        valueUk: 'ж',
      },
      {
        code: 'Quote',
        value: "'",
        valueRu: 'э',
        valueUk: 'є',
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
        valueRu: 'я',
        valueUk: 'я',
      },
      {
        code: 'KeyX',
        value: 'x',
        valueRu: 'ч',
        valueUk: 'ч',
      },
      {
        code: 'KeyC',
        value: 'c',
        valueRu: 'с',
        valueUk: 'с',
      },
      {
        code: 'KeyV',
        value: 'v',
        valueRu: 'м',
        valueUk: 'м',
      },
      {
        code: 'KeyB',
        value: 'b',
        valueRu: 'и',
        valueUk: 'и',
      },
      {
        code: 'KeyN',
        value: 'n',
        valueRu: 'т',
        valueUk: 'т',
      },
      {
        code: 'KeyM',
        value: 'm',
        valueRu: 'ь',
        valueUk: 'ь',
      },
      {
        code: 'Comma',
        value: ',',
        valueRu: 'б',
        valueUk: 'б',
      },
      {
        code: 'Period',
        value: '.',
        valueRu: 'ю',
        valueUk: 'ю',
      },
      {
        code: 'Slash',
        value: '?',
        valueRu: '/',
        valueUk: '.',
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
        valueRu: 'Ru',
        valueUk: 'Uk',
        valueEn: 'En',
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
      return `<i class="material-icons">${icon_name}</i>`;
    };
    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak =
        ['Backspace', 'Del', 'Enter', 'ShiftRight'].indexOf(key.code) !== -1;
      keyElement.setAttribute('id', `${key.code}`);
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');
      if (
        ![
          'Backspace',
          'Del',
          'Enter',
          'ShiftRight',
          'ShiftLeft',
          'CapsLock',
          'ControlLeft',
          'ControlRight',
          'AltLeft',
          'AltRight',
          'Tab',
        ].includes(key.code)
      ) {
        keyElement.classList.add('keyboard__letters');
      }

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
            textarea.value = value.slice(0, pos) + value.slice(pos + 1);
            keyElement.blur();
            textarea.focus();
            textarea.selectionStart = pos;
            textarea.selectionEnd = pos;
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
          //keyElement.innerHTML = createIconHTML('keyboard_capslock');
          keyElement.innerText = 'CapsLock';
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle(
              'keyboard__key-active',
              this.properties.capsLock
            );
          });
          break;

        case 'MetaLeft':
          keyElement.classList.add('keyboard__key-dbl');
          keyElement.innerHTML = createIconHTML('language');
          keyElement.addEventListener('click', () => {
            const keyValue = this.properties.currLang;
            this.onVirtualKeydown(keyValue, keyElement);
          });
          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.innerHTML = createIconHTML('keyboard_return');

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
          keyElement.classList.add('keyboard__key', 'keyboard__key-dbl');
          keyElement.innerText = 'Ctrl';
          keyElement.addEventListener('click', () => {
            const keyValue = key.code;
            this.onVirtualKeydown(keyValue, keyElement);
          });

          break;

        case 'ControlRight':
          keyElement.classList.add('keyboard__key', 'keyboard__key-dbl');
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
          });

          break;

        case 'Done':
          keyElement.classList.add('keyboard__key-wide', 'keyboard__key-dark');
          //keyElement.innerHTML = createIconHTML('check_circle');

          break;

        default:
          keyElement.innerHTML = key.value;

          keyElement.addEventListener('click', () => {
            console.log('Key pressed');
            let keyValue = this.properties.capsLock
              ? key.value.toUpperCase()
              : key.value.toLowerCase();
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
  // onchangeVirtual (event){
  //   switch (event.target.value) {
  //     case 'Ru':
  //       keyboard.
  //   }

  // },
  onclickAltShift(event) {
    if (event.code === 'AltLeft') {
      document.addEventListener('keyup', function (e) {
        if (e.code === 'ShiftLeft') {
          // switch (keyboard.properties.currLang) {
          //   case 'En':
          //     keyboard.properties.currLang = 'Uk';
          //     break;
          //   case 'Uk':
          //     keyboard.properties.currLang = 'En';
          //
          //     break;
          //   default:
          //     keyboard.properties.currLang = 'En';
          //     break;
          // }
          keyboard.properties.currLang === 'En'
            ? (keyboard.properties.currLang = 'Uk')
            : (keyboard.properties.currLang = 'En');
          console.log('yes__________________', keyboard.properties.currLang);
        }
      });
    }
  },

  onVirtualKeydown(value, keyElement) {
    const textarea = document.querySelector('textarea');
    textarea.value += value;
    keyElement.blur();
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
  },
};
window.addEventListener('DOMContentLoaded', () => {
  keyboard.init();
});
