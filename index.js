class Keyboard {
  properties = {
    value: '',
    currLang: 'En',
    capsLock: false,
  };
  textarea = null;
  keysContainer = null;
  keys = [];

  constructor() {
    const storedLang =  this.storageLangGet();
    this.properties.currLang = storedLang ? storedLang : 'En';

    const wrapper = document.createElement('div');
    wrapper.classList.add('keyboard-wrapper');

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Type your text ...';
    textarea.classList.add('textarea');

    this.textarea = textarea;

    const keysContainer = document.createElement('div');
    keysContainer.classList.add('keyboard__keys');
    keysContainer.appendChild(this.createKeys());

    this.keysContainer = keysContainer;

    this.keys = keysContainer.querySelectorAll('.keyboard__letters');

    const main = document.createElement('div');
    main.classList.add('keyboard');
    wrapper.innerText =
      "Shortcut for switching a language: left Alt+Shift, on virtual keyboard - 'globe' button";

    document.body.append(wrapper);
    wrapper.append(main, textarea);
    main.append(keysContainer);

    this.addListeners();
  }

  addListeners() {
    document.addEventListener('keydown', this.onkeydown);
    document.addEventListener('keyup', this.onkeyup);
    document.addEventListener('keydown', this.onclickAltShift);
    document.addEventListener('change', this.onchangeVirtual);
  }

  onkeydown(e) {
    const id = document.getElementById(e.code);
    id.classList.add('active');
  }

  onkeyup(e) {
    const id = document.getElementById(e.code);
    id.classList.remove('active');
  }

  createKeys() {
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
        shiftUk: '!',
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
        shiftUk: '(',
      },
      {
        code: 'Digit0',
        value: '0',
        shiftEn: ')',
        shiftUk: ')',
      },
      {
        code: 'Minus',
        value: '-',
        shiftEn: '_',
        shiftUk: '_',
      },
      {
        code: 'Equal',
        value: '=',
        shiftEn: '+',
        shiftUk: '+',
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
        value: '[',
        valueRu: 'х',
        valueUk: 'х',
      },
      {
        code: 'BracketRight',
        value: ']',
        valueRu: 'ъ',
        valueUk: 'ї',
      },
      {
        code: 'BackSlash',
        value: '\\',
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
        value: '▲',
        valueRu: '',
        valueUk: '▲',
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
        code: 'Lang',
        value: 'Lang',
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
        value: '◀',
        valueRu: '',
        valueUk: '◀',
      },
      {
        code: 'ArrowDown',
        value: '▼',
        valueRu: '',
        valueUk: '▼',
      },
      {
        code: 'ArrowRight',
        value: '▶',
        valueRu: '',
        valueUk: '▶',
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
      const { code } = key;
      let keyText = key.value;
      const keyElement = document.createElement('button');

      const insertLineBreak =
        ['Backspace', 'Del', 'Enter', 'ShiftRight'].indexOf(code) !== -1;
      keyElement.setAttribute('id', `${code}`);
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
          'Lang',
        ].includes(code)
      ) {
        keyElement.classList.add('keyboard__letters');
      }

      switch (code) {
        case 'Backspace':
          keyElement.classList.add(
            'keyboard__key-wide',
            'keyboard__key-wide-back'
          );
          keyElement.innerText = 'Backspace';
          keyElement.addEventListener('click', () => {
            this.textarea = document.querySelector('textarea');
            const pos = this.textarea.selectionStart;
            const value = this.textarea.value;
            this.textarea.value = value.slice(0, pos - 1) + value.slice(pos);
            keyElement.blur();
            this.textarea.focus();
            this.textarea.selectionStart = pos - 1;
            this.textarea.selectionEnd = pos - 1;
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
            const keyValue = `    `;
            this.onVirtualKeydown(keyValue, keyElement);
          });

          break;

        case 'CapsLock':
          keyElement.classList.add(
            'keyboard__key-wide',
            'keyboard__key-activatable'
          );
          keyElement.innerText = 'CapsLock';
          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle(
              'keyboard__key-active',
              this.properties.capsLock
            );
          });
          break;

        case 'Lang':
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('language');
          keyElement.addEventListener('click', (e) => {
            this.onchangeVirtual(e);
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
            const keyValue = '';
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

          break;

        case 'ControlLeft':
          keyElement.classList.add('keyboard__key', 'keyboard__key-dbl');
          keyElement.innerText = 'Ctrl';

          break;

        case 'ControlRight':
          keyElement.classList.add('keyboard__key', 'keyboard__key-dbl');
          keyElement.innerText = 'Ctrl';

          break;

        case 'AltLeft':
          keyElement.classList.add('keyboard__key', 'alt-left');
          keyElement.innerText = 'Alt';

          break;

        case 'AltRight':
          keyElement.classList.add('keyboard__key', 'alt-right');
          keyElement.innerText = 'Alt';

          break;

        case 'Space':
          keyElement.classList.add('keyboard__key-extra-wide');
          keyElement.addEventListener('click', () => {
            const keyValue = ' ';
            this.onVirtualKeydown(keyValue, keyElement);
          });

          break;

        default:
          if (this.properties.currLang === 'Uk' && key.valueUk) {
            keyText = key.valueUk;
          }
          keyElement.innerHTML = keyText;

          keyElement.addEventListener('click', () => {
            let keyValue = this.properties.capsLock
              ? keyText.toUpperCase()
              : keyText.toLowerCase();
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
  }

  onchangeVirtual() {
    this.properties.currLang === 'En'
      ? (this.properties.currLang = 'Uk')
      : (this.properties.currLang = 'En');
    this.keysContainer.innerHTML = '';
    this.keysContainer.appendChild(this.createKeys());
    this.storageLangSet(this.properties.currLang);
  }

  onclickAltShift(e) {
    if (e.code === 'AltLeft') {
      document.addEventListener('keyup', function (e) {
        if (e.code === 'ShiftLeft') {
          this.onchangeVirtual();
        }
      });
    }
  }

  onVirtualKeydown(value, keyElement) {
    const pos = this.textarea.selectionStart;
    this.textarea.value =
      this.textarea.value.slice(0, pos) +
      value +
      this.textarea.value.slice(pos);
    keyElement.blur();
    this.textarea.focus();
    this.textarea.selectionStart = pos + value.length;
    this.textarea.selectionEnd = pos + value.length;
  }

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.keys) {
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  }

  storageLangSet(lang) {
    localStorage.setItem('CurrLang', lang);
  }

  storageLangGet() {
    return localStorage.getItem('CurrLang');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Keyboard();
});
