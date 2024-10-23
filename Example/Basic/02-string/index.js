function concatStrings(str1, str2) {
  return str1 + str2;
}

function toUpperCase(str) {
  return str.toUpperCase();
}

function trimString(str) {
  return str.trim();
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

module.exports = {
  concatStrings,
  toUpperCase,
  trimString,
  reverseString,
  capitalize
}