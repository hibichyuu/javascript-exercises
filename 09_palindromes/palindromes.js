const palindromes = function (stringArg = '') {
   let newString = stringArg.toLowerCase().replace(/[^a-z0-9]/g, ""); // copied from solution, cant figure out what /[^a-z0-9]/g meant.
   return newString.split("").reverse().join("") === newString;
};

// Do not edit below this line
module.exports = palindromes;
