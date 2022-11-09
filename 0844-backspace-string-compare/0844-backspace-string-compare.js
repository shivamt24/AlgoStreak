/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  let si = s.length - 1, ti = t.length - 1;

  while (si >= 0 || ti >= 0) {
    si = clearBackSpace(s, si);
    ti = clearBackSpace(t, ti);

    let sChar = s[si], tChar = t[ti];
    if (sChar !== tChar) { return false; }

    si--; ti--;
  }

  return true;
};

var clearBackSpace = function(string, index) {
  let skip = 0;

  while (index >= 0) {
    if (string[index] === '#') { skip++; index--; }
    else if (skip > 0) { skip--; index--; }
    else { break; }
  }

  return index;
}