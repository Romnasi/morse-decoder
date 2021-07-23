const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};


const getClean = (array) => {
  const index = array.findIndex((item) => item === '1');
  return array.slice(index);
};


const getLetter = (array) => {
  let morseSymbols = [];

  for(let z = 0; z < array.length - 1; z += 2) {
    const next = z + 1;
    let encSymb = `${array[z]}${array[next]}`;

    if (encSymb === '10') {
      encSymb = '.';
    } else {
      encSymb = '-';
    }
    morseSymbols.push(encSymb);
  }

  return MORSE_TABLE[morseSymbols.join('')];
};


const getWord = (array) => {
  const letters = [];
  const maxLength = 10;

  for (let i = 0; i < array.length; i += maxLength) {
    let encLetters = array.slice(i, i + maxLength);

    if (encLetters[0] === '0') {
      encLetters = getClean(encLetters);
    }

    const letter = getLetter(encLetters);
    letters.push(letter);
  }

  return letters.join('');
};


function decode(expr) {
  const words = [];
  const encWords = expr.split('**********');

  for(let i = 0; i < encWords.length; i++) {
    const encLetters = encWords[i].split('');
    const word = getWord(encLetters);
    words.push(word);
   }
  return words.join(' ');
};


module.exports = {
  decode
}
