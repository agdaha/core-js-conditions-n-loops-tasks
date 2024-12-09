/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max;
  if (a > b) {
    max = a > c ? a : c;
  } else {
    max = b > c ? b : c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let ret = '';
  const d = Math.floor(num / 10);
  switch (d) {
    case 1:
      ret = 'X';
      break;
    case 2:
      ret = 'XX';
      break;
    case 3:
      ret = 'XXX';
      break;
    default:
      break;
  }
  switch (num % 10) {
    case 1:
      ret += 'I';
      break;
    case 2:
      ret += 'II';
      break;
    case 3:
      ret += 'III';
      break;
    case 4:
      ret += 'IV';
      break;
    case 5:
      ret += 'V';
      break;
    case 6:
      ret += 'VI';
      break;
    case 7:
      ret += 'VII';
      break;
    case 8:
      ret += 'VIII';
      break;
    case 9:
      ret += 'IX';
      break;
    default:
      break;
  }
  return ret;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let ret = '';
  for (let i = 0, l = numberStr.length; i < l; i += 1) {
    switch (numberStr[i]) {
      case '1':
        ret += 'one';
        break;
      case '2':
        ret += 'two';
        break;
      case '3':
        ret += 'three';
        break;
      case '4':
        ret += 'four';
        break;
      case '5':
        ret += 'five';
        break;
      case '6':
        ret += 'six';
        break;
      case '7':
        ret += 'seven';
        break;
      case '8':
        ret += 'eight';
        break;
      case '9':
        ret += 'nine';
        break;
      case '0':
        ret += 'zero';
        break;
      case '-':
        ret += 'minus';
        break;
      case ',':
      case '.':
        ret += 'point';
        break;
      default:
    }
    if (i + 1 < l) {
      ret += ' ';
    }
  }
  return ret;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let ans = true;
  for (let i = 0, l = str.length; i < l / 2; i += 1) {
    if (str[i] !== str[l - i - 1]) {
      ans = false;
      break;
    }
  }

  return ans;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let idx = -1;
  for (let i = 0, l = str.length; i < l; i += 1) {
    if (str[i] === letter) {
      idx = i;
      break;
    }
  }
  return idx;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let ans = false;
  let N = num;
  while (N > 0) {
    const d = N % 10;
    if (d === digit) {
      ans = true;
      break;
    }
    N = Math.floor(N / 10);
  }
  return ans;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1, l = arr.length; i < l - 1; i += 1) {
    let sumLeft = 0;
    for (let x = 0; x < i; x += 1) {
      sumLeft += arr[x];
    }
    let sumRight = 0;
    for (let x = i + 1; x < l; x += 1) {
      sumRight += arr[x];
    }
    if (sumLeft === sumRight) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }
  let dx = 1;
  let dy = 0;
  let x = 0;
  let y = 0;
  for (let i = 1; i <= size * size; i += 1) {
    matrix[y][x] = i;
    if (dx === 1 && (x + dx === size || matrix[y + dy][x + dx])) {
      dx = 0;
      dy = 1;
    } else if (dy === 1 && (y + dy === size || matrix[y + dy][x + dx])) {
      dx = -1;
      dy = 0;
    } else if (dx === -1 && (x + dx === -1 || matrix[y + dy][x + dx])) {
      dx = 0;
      dy = -1;
    } else if (dy === -1 && (y + dy === -1 || matrix[y + dy][x + dx])) {
      dx = 1;
      dy = 0;
    }
    x += dx;
    y += dy;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const ysize = matrix.length;
  const xsize = matrix[0].length;
  const etalon = matrix;
  const newMatrix = [];
  for (let y = 0; y < ysize; y += 1) {
    newMatrix[y] = [];
  }
  for (let i = 0; i < ysize; i += 1) {
    for (let j = 0; j < xsize; j += 1) {
      newMatrix[i][j] = matrix[ysize - j - 1][i];
    }
  }
  for (let i = 0; i < ysize; i += 1) {
    for (let j = 0; j < xsize; j += 1) {
      etalon[i][j] = newMatrix[i][j];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * u.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function quickSort(arr2, start, end) {
    const arrP = arr2;
    if (start < end) {
      const pivot = arrP[end];
      let pi = start;

      for (let j = start; j <= end - 1; j += 1) {
        if (arrP[j] <= pivot) {
          [arrP[pi], arrP[j]] = [arrP[j], arrP[pi]];
          pi += 1;
        }
      }

      [arrP[pi], arrP[end]] = [arrP[end], arrP[pi]];

      quickSort(arrP, start, pi - 1);
      quickSort(arrP, pi + 1, end);
    }
  }
  quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let chars = str.split('');
  for (let cnt = 0; cnt < iterations; cnt += 1) {
    const newChars = [];
    for (let i = 0, l = str.length; i < l; i += 1) {
      if (i % 2 === 0) {
        newChars[i / 2] = chars[i];
      } else {
        newChars[Math.trunc(l / 2) + Math.trunc(i / 2)] = chars[i];
      }
    }
    chars = newChars;
  }
  let ret = '';
  for (let i = 0, l = str.length; i < l; i += 1) {
    ret += chars[i];
  }
  return ret;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
