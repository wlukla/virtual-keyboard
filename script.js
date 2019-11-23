// array with keyboard symbols
const keyboardSymbols = [
  [
    ['ё', 'Ё', '`', '~', 'Backquote'],
    ['1', '!', '1', '!', 'Digit1'],
    ['2', '\x22', '2', '@', 'Digit2'],
    ['3', '№', '3', '#', 'Digit3'],
    ['4', ';', '4', '$', 'Digit4'],
    ['5', '%', '5', '%', 'Digit5'],
    ['6', ',', '6', '^', 'Digit6'],
    ['7', '.', '7', '&', 'Digit7'],
    ['8', '*', '8', '*', 'Digit8'],
    ['9', '(', '9', '(', 'Digit9'],
    ['0', ')', '0', ')', 'Digit0'],
    ['-', '_', '-', '_', 'Minus'],
    ['=', '+', '=', '+', 'Equal'],
    ['backspace', 'backspace', 'backspace', 'backspace', 'Backspace'],
  ],
  [
    ['tab', 'tab', 'tab', 'tab', 'Tab'],
    ['й', 'Й', 'q', 'Q', 'KeyQ'],
    ['ц', 'Ц', 'w', 'W', 'KeyW'],
    ['у', 'У', 'e', 'E', 'KeyE'],
    ['к', 'К', 'r', 'R', 'KeyR'],
    ['е', 'Е', 't', 'T', 'KeyT'],
    ['н', 'Н', 'y', 'Y', 'KeyY'],
    ['г', 'Г', 'u', 'U', 'KeyU'],
    ['ш', 'Ш', 'i', 'I', 'KeyI'],
    ['щ', 'Щ', 'o', 'O', 'KeyO'],
    ['з', 'З', 'p', 'P', 'KeyP'],
    ['х', 'Х', '[', '{', 'BracketLeft'],
    ['ъ', 'Ъ', ']', '}', 'BracketRight'],
    ['ё', 'Ё', '\x5c', '|', 'Backslash'],
    ['delete', 'delete', 'delete', 'delete', 'Delete'],
  ],
  [
    ['caps lock', 'caps lock', 'caps lock', 'caps lock', 'CapsLock'],
    ['ф', 'Ф', 'a', 'A', 'KeyA'],
    ['ы', 'Ы', 's', 'S', 'KeyS'],
    ['в', 'В', 'd', 'D', 'KeyD'],
    ['а', 'А', 'f', 'F', 'KeyF'],
    ['п', 'П', 'g', 'G', 'KeyG'],
    ['р', 'Р', 'h', 'H', 'KeyH'],
    ['о', 'О', 'j', 'J', 'KeyJ'],
    ['л', 'Л', 'k', 'K', 'KeyK'],
    ['д', 'Д', 'l', 'L', 'KeyL'],
    ['ж', 'Ж', ';', ':', 'Semicolon'],
    ['э', 'Э', '\'', '\x22', 'Quote'],
    ['return', 'return', 'return', 'return', 'Enter'],
  ],
  [
    ['shift', 'shift', 'shift', 'shift', 'ShiftLeft'],
    ['я', 'Я', 'z', 'Z', 'KeyZ'],
    ['ч', 'Ч', 'x', 'X', 'KeyX'],
    ['с', 'С', 'c', 'C', 'KeyC'],
    ['м', 'М', 'v', 'V', 'KeyV'],
    ['и', 'И', 'b', 'B', 'KeyB'],
    ['т', 'Т', 'n', 'N', 'KeyN'],
    ['ь', 'Ь', 'm', 'M', 'KeyM'],
    ['б', 'Б', '<', ',', 'Comma'],
    ['ю', 'Ю', '>', '.', 'Period'],
    ['/', '?', '/', '?', 'Slash'],
    ['shift', 'shift', 'shift', 'shift', 'ShiftRight'],
  ],
  [
    ['control', 'control', 'control', 'control', 'ControlLeft'],
    ['option', 'option', 'option', 'option', 'AltLeft'],
    ['command', 'command', 'command', 'command', 'MetaLeft'],
    ['\x20', '\x20', '\x20', '\x20', 'Space'],
    ['command', 'command', 'command', 'command', 'MetaRight'],
    ['option', 'option', 'option', 'option', 'AltRight'],
    ['&#9666;', '&#9666;', '&#9666;', '&#9666;', 'ArrowLeft'],
    ['&#9652;', '&#9652;', '&#9652;', '&#9652;', 'ArrowUp'],
    ['&#9662;', '&#9662;', '&#9662;', '&#9662;', 'ArrowDown'],
    ['&#9656;', '&#9656;', '&#9656;', '&#9656;', 'ArrowRight'],
  ],
];

const functionalKeys = [
  'Backspace', 'Tab', 'Delete', 'CapsLock',
  'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft',
  'AltLeft', 'MetaLeft', 'MetaRight', 'AltRight',
  'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp',
  'Space',
];

// creating wrapper
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

// textarea creation
const textarea = document.createElement('textarea');
textarea.setAttribute('rows', 20);
textarea.setAttribute('cols', 100);
textarea.setAttribute('tabindex', -1);
textarea.classList.add('textarea');
wrapper.appendChild(textarea);

// creating keyboard structure
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

// adding rows
for (let row = 0; row < keyboardSymbols.length; row += 1) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  // filling rows with keys
  for (let key = 0; key < keyboardSymbols[row].length; key += 1) {
    const keyDiv = document.createElement('div');
    const keyClassIndex = keyboardSymbols[row][key].length - 1;
    const keyClass = keyboardSymbols[row][key][keyClassIndex];
    keyDiv.classList.add('key');

    const ru = document.createElement('div');
    ru.classList.add(keyboardSymbols[row][key][keyClassIndex], 'ru', 'on');

    if (functionalKeys.includes(keyClass)) {
      keyDiv.classList.add(keyClass, 'functional');
    }

    if (keyClass === 'Space') {
      keyDiv.classList.add('Space');
    }

    const en = document.createElement('div');
    en.classList.add(keyClass, 'en');

    for (let sym = 0; sym < keyClassIndex; sym += 1) {
      const span = document.createElement('span');
      span.innerHTML = keyboardSymbols[row][key][sym];
      if (sym % 2 === 0) {
        span.classList.add('lower', 'active');
      } else {
        span.classList.add('upper');
      }
      if (sym < 2) {
        ru.appendChild(span);
      } else {
        en.appendChild(span);
      }
    }

    keyDiv.appendChild(ru);
    keyDiv.appendChild(en);
    rowDiv.appendChild(keyDiv);
  }

  keyboard.appendChild(rowDiv);
}

wrapper.appendChild(keyboard);
document.body.appendChild(wrapper);
textarea.focus();
let cursorStart = textarea.selectionStart;
let cursorEnd = textarea.selectionEnd;

function addTab() {
  cursorStart = textarea.selectionStart;
  cursorEnd = textarea.selectionEnd;

  const beforeCursor = textarea.value.slice(0, cursorStart);
  const afterCursor = textarea.value.slice(cursorStart, textarea.value.length);

  textarea.value = `${beforeCursor}   ${afterCursor}`;

  textarea.selectionStart = cursorStart + 4;
  textarea.selectionEnd = cursorEnd + 3;
}

function addEnter() {
  cursorStart = textarea.selectionStart;
  cursorEnd = textarea.selectionEnd;

  const beforeCursor = textarea.value.slice(0, cursorStart);
  const afterCursor = textarea.value.slice(cursorStart, textarea.value.length);

  textarea.value = `${beforeCursor}\n${afterCursor}`;

  textarea.selectionStart = cursorStart + 1;
  textarea.selectionEnd = cursorEnd + 1;
}

function doBackspace() {
  cursorStart = textarea.selectionStart;
  cursorEnd = textarea.selectionEnd;

  if (cursorEnd !== 0 && (cursorStart === cursorEnd)) {
    const beforeCursor = textarea.value.slice(0, cursorStart - 1);
    const afterCursor = textarea.value.slice(cursorStart, textarea.value.length);
    textarea.value = `${beforeCursor}${afterCursor}`;

    textarea.selectionStart = cursorStart;
    textarea.selectionEnd = cursorEnd - 1;
  } else if (cursorStart !== cursorEnd) {
    if (cursorEnd > cursorStart) {
      const beforeCursor = textarea.value.slice(0, cursorStart - 1);
      const afterCursor = textarea.value.slice(cursorEnd, textarea.value.length);
      textarea.value = `${beforeCursor}${afterCursor}`;

      textarea.selectionStart = cursorStart;
      textarea.selectionEnd = cursorStart;
    } else {
      const beforeCursor = textarea.value.slice(0, cursorEnd - 1);
      const afterCursor = textarea.value.slice(cursorStart, textarea.value.length);
      textarea.value = `${beforeCursor}${afterCursor}`;

      textarea.selectionStart = cursorEnd;
      textarea.selectionEnd = cursorEnd;
    }
  }
}

function doDelete() {
  cursorStart = textarea.selectionStart;
  cursorEnd = textarea.selectionEnd;

  if (cursorStart === cursorEnd) {
    const beforeCursor = textarea.value.slice(0, cursorEnd);
    const afterCursor = textarea.value.slice(cursorEnd + 1, textarea.value.length);
    textarea.value = `${beforeCursor}${afterCursor}`;

    textarea.selectionStart = cursorStart;
    textarea.selectionEnd = cursorEnd;
  } else if (cursorStart !== cursorEnd) {
    if (cursorEnd > cursorStart) {
      const beforeCursor = textarea.value.slice(0, cursorStart);
      const afterCursor = textarea.value.slice(cursorEnd, textarea.value.length);
      textarea.value = `${beforeCursor}${afterCursor}`;

      textarea.selectionStart = cursorStart;
      textarea.selectionEnd = cursorStart;
    } else {
      const beforeCursor = textarea.value.slice(0, cursorEnd);
      const afterCursor = textarea.value.slice(cursorStart, textarea.value.length);

      textarea.value = `${beforeCursor}${afterCursor}`;

      textarea.selectionStart = cursorEnd;
      textarea.selectionEnd = cursorEnd;
    }
  }
}

function doShift() {
  const rows = keyboard.children;
  for (let row = 0; row < rows.length; row += 1) {
    const keys = rows[row].children;
    for (let key = 0; key < keys.length; key += 1) {
      if (keys[key].querySelectorAll('.lower.active')) {
        keys[key].querySelectorAll('.upper').forEach((item) => item.classList.add('active'));
        keys[key].querySelectorAll('.lower').forEach((item) => item.classList.remove('active'));
      } else {
        keys[key].querySelectorAll('.upper').forEach((item) => item.classList.remove('active'));
        keys[key].querySelectorAll('.lower').forEach((item) => item.classList.add('active'));
      }
    }
  }
}

function doUnshift() {
  const rows = keyboard.children;
  for (let row = 0; row < rows.length; row += 1) {
    const keys = rows[row].children;
    for (let key = 0; key < keys.length; key += 1) {
      if (keys[key].querySelectorAll('.upper.active').length !== 0) {
        keys[key].querySelectorAll('.upper').forEach((item) => item.classList.remove('active'));
        keys[key].querySelectorAll('.lower').forEach((item) => item.classList.add('active'));
      } else {
        keys[key].querySelectorAll('.upper').forEach((item) => item.classList.add('active'));
        keys[key].querySelectorAll('.lower').forEach((item) => item.classList.remove('active'));
      }
    }
  }
}

function doArrowLeft() {
  if (textarea.selectionStart !== 0) {
    textarea.selectionStart -= 1;
    textarea.selectionEnd -= 1;
  }
}

function doArrowRight() {
  textarea.selectionStart += 1;
}

let isCaps = false;

function doCaps() {
  isCaps = true;
  document.querySelector('.CapsLock').classList.add('pressed');
  const rows = keyboard.children;
  for (let row = 0; row < rows.length; row += 1) {
    const keys = rows[row].children;
    for (let key = 0; key < keys.length; key += 1) {
      if (keys[key].querySelectorAll('.lower.active').length !== 0) {
        keys[key].querySelectorAll('.upper').forEach((item) => item.classList.add('active'));
        keys[key].querySelectorAll('.lower').forEach((item) => item.classList.remove('active'));
      } else {
        keys[key].querySelectorAll('.upper').forEach((item) => item.classList.remove('active'));
        keys[key].querySelectorAll('.lower').forEach((item) => item.classList.add('active'));
      }
    }
  }
}

function doUncaps() {
  document.querySelector('.CapsLock').classList.remove('pressed');
  isCaps = false;
  const rows = keyboard.children;
  for (let row = 0; row < rows.length; row += 1) {
    const keys = rows[row].children;
    for (let key = 0; key < keys.length; key += 1) {
      if (keys[key].querySelectorAll('.lower.active').length !== 0) {
        keys[key].querySelectorAll('.upper').forEach((item) => item.classList.add('active'));
        keys[key].querySelectorAll('.lower').forEach((item) => item.classList.remove('active'));
      } else {
        keys[key].querySelectorAll('.upper').forEach((item) => item.classList.remove('active'));
        keys[key].querySelectorAll('.lower').forEach((item) => item.classList.add('active'));
      }
    }
  }
}

function changeLang() {
  const rows = keyboard.children;
  for (let row = 0; row < rows.length; row += 1) {
    const keys = rows[row].children;
    for (let key = 0; key < keys.length; key += 1) {
      if (keys[key].querySelectorAll('.ru.on').length) {
        keys[key].querySelectorAll('.en').forEach((item) => item.classList.add('on'));
        keys[key].querySelectorAll('.ru').forEach((item) => item.classList.remove('on'));
        window.localStorage.setItem('lang', 'en');
      } else {
        keys[key].querySelectorAll('.en').forEach((item) => item.classList.remove('on'));
        keys[key].querySelectorAll('.ru').forEach((item) => item.classList.add('on'));
        window.localStorage.setItem('lang', 'ru');
      }
    }
  }
}

if (window.localStorage.getItem('lang') === 'en') {
  changeLang();
}

// adding mousedown listeners for clicks on virtual keyboard
keyboard.addEventListener('mousedown', (e) => {
  const isTargetClass = (className) => e.target.classList.contains(className)
    || e.target.parentElement.parentElement.classList.contains(className);

  if (isTargetClass('Tab')) {
    addTab();
  } else if (isTargetClass('Enter')) {
    addEnter();
  } else if (isTargetClass('Backspace')) {
    doBackspace();
  } else if (isTargetClass('Delete')) {
    doDelete();
  } else if (isTargetClass('ShiftLeft') || isTargetClass('ShiftRight')) {
    doShift();
  } else if (isTargetClass('ArrowLeft')) {
    doArrowLeft();
  } else if (isTargetClass('ArrowRight')) {
    doArrowRight();
  } else if (isTargetClass('CapsLock')) {
    if (isCaps === false) {
      doCaps();
    } else {
      doUncaps();
    }
  } else if (e.target.classList.contains('key')
      && !functionalKeys.includes(e.target.parentElement.parentElement.classList[1])
      && !isTargetClass('ArrowUp')
      && !isTargetClass('ArrowDown')
      && !isTargetClass('AltLeft')
      && !isTargetClass('AltRight')
      && !isTargetClass('ControlLeft')
      && !isTargetClass('MetaLeft')
      && !isTargetClass('MetaRight')) {
    cursorStart = textarea.selectionStart;
    cursorEnd = textarea.selectionEnd;

    const beforeCursor = textarea.value.slice(0, cursorStart);
    const afterCursor = textarea.value.slice(cursorStart, textarea.value.length);
    let char = e.target.querySelector('.on').querySelector('.active').innerHTML;

    if (char === '&lt;') { char = '<'; }
    if (char === '&gt;') { char = '>'; }

    textarea.value = `${beforeCursor}${char}${afterCursor}`;

    textarea.selectionStart += 1;
    textarea.selectionEnd += 1;
  } else if (e.target.classList.contains('active')
    && !functionalKeys.includes(e.target.classList[1])) {
    cursorStart = textarea.selectionStart;
    cursorEnd = textarea.selectionEnd;

    const beforeCursor = textarea.value.slice(0, cursorStart);
    const afterCursor = textarea.value.slice(cursorStart, textarea.value.length);
    let char = e.target.innerHTML;

    if (char === '&lt;') { char = '<'; }
    if (char === '&gt;') { char = '>'; }

    textarea.value = `${beforeCursor}${char}${afterCursor}`;

    textarea.selectionStart = cursorStart + 1;
    textarea.selectionEnd = cursorEnd + 1;
  }

  if (e.target.classList.contains('key')
    && !(e.target.classList.contains('CapsLock')
        || e.target.parentElement.parentElement.classList.contains('CapsLock'))) {
    e.target.classList.add('pressed');
  } else if (e.target.classList.contains('active')
    && !(e.target.classList.contains('CapsLock')
        || e.target.parentElement.parentElement.classList.contains('CapsLock'))) {
    e.target.parentElement.parentElement.classList.add('pressed');
  }
});

keyboard.addEventListener('mouseup', (e) => {
  textarea.focus();

  const isTargetClass = (className) => e.target.classList.contains(className)
    || e.target.parentElement.parentElement.classList.contains(className);

  if (isTargetClass('ShiftLeft') || isTargetClass('ShiftRight')) {
    doUnshift();
  }
  if (e.target.classList.contains('key')
    && !isTargetClass('CapsLock')) {
    e.target.classList.remove('pressed');
  } else if (e.target.classList.contains('active')
    && !isTargetClass('CapsLock')) {
    e.target.parentElement.parentElement.classList.remove('pressed');
  }
  if (!isTargetClass('Tab') && isTargetClass('Delete')) {
    textarea.selectionStart = cursorStart + 1;
    textarea.selectionEnd = cursorEnd + 1;
  }
});

// key presses
document.addEventListener('keydown', (e) => {
  e.preventDefault();
  textarea.focus();
  if (functionalKeys.includes(e.code)) {
    document.querySelector(['.', e.code].join('')).classList.add('pressed');
  } else {
    document.querySelector(['.', e.code].join('')).parentElement.classList.add('pressed');
  }

  if ((e.code === 'ShiftRight' || e.code === 'ShiftLeft') && e.ctrlKey) {
    changeLang();
  } else if (!functionalKeys.includes(e.code) || e.code === 'Space') {
    cursorStart = textarea.selectionStart;
    cursorEnd = textarea.selectionEnd;

    const beforeCursor = textarea.value.slice(0, cursorStart);
    const afterCursor = textarea.value.slice(cursorEnd, textarea.value.length);
    let char = document.querySelector(['.', e.code, '.on'].join('')).querySelector('.active').innerHTML;

    if (char === '&lt;') { char = '<'; }
    if (char === '&gt;') { char = '>'; }

    textarea.value = `${beforeCursor}${char}${afterCursor}`;

    textarea.selectionStart = cursorStart + 1;
    textarea.selectionEnd = cursorEnd + 1;
  } else if (e.code === 'Tab') {
    addTab();
  } else if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.ctrlKey) {
    doShift();
  } else if (e.code === 'Enter') {
    addEnter();
  } else if (e.code === 'Backspace') {
    doBackspace();
  } else if (e.code === 'Delete') {
    doDelete();
  } else if (e.code === 'CapsLock') {
    doCaps();
  } else if (e.code === 'ArrowLeft') {
    doArrowLeft();
  } else if (e.code === 'ArrowRight') {
    doArrowRight();
  }
});

document.addEventListener('keyup', (e) => {
  if (functionalKeys.includes(e.code)) {
    document.querySelector(['.', e.code].join('')).classList.remove('pressed');
  } else {
    document.querySelector(['.', e.code].join('')).parentElement.classList.remove('pressed');
  }

  if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.ctrlKey) {
    doUnshift();
  } else if (e.code === 'CapsLock') {
    doUncaps();
  }
});
