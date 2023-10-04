function toRomanLazy(num) {
  let output = "";
  var romanNumeralToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];
  for (ltr of romanNumeralPriorityOrder) {
    if (num / romanNumeralToArabic[ltr] < 1) {
      //console.log(`${romanNumeralToArabic[ltr]} is too big for ${num}`);
    } else if (num / romanNumeralToArabic[ltr] >= 1) {
      howMany = Math.floor(num / romanNumeralToArabic[ltr]);
      //how many times the roman numeral will go into sum
      for (i = howMany; i > 0; i--) {
        output += ltr;
        num -= romanNumeralToArabic[ltr];
      }
    }
  }
  return output;
}

toRomanLazy(4); // 'IIII'
toRomanLazy(150); // 'CL'
toRomanLazy(944); // 'DCCCCXXXXIIII'

function toRoman(num) {
  let output = "";
  var romanNumeralToArabic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  var romanNumeralPriorityOrder = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  for (ltr of romanNumeralPriorityOrder) {
    if (num / romanNumeralToArabic[ltr] < 1) {
    } else if (num / romanNumeralToArabic[ltr] >= 1) {
      howMany = Math.floor(num / romanNumeralToArabic[ltr]);
      //how many times the roman numeral will go into sum
      for (i = howMany; i > 0; i--) {
        output += ltr;
        num -= romanNumeralToArabic[ltr];
      }
    }
  }
  console.log(output);
  return output;
}

toRoman(4); // 'IV'
toRoman(150); // 'CL'
toRoman(944); // 'CM XL IV'
module.exports = { toRoman, toRomanLazy };
// IV -> 4
// IX -> 9
// XL -> 40
// CD -> 400
// CM -> 900
