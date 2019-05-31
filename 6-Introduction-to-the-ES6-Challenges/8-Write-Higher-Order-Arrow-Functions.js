/* In this lesson I learned how to  write higher order arrow functions using functions.higherorderfunction=>*/
{"index.js":"const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];\nconst squareList = (arr) => {\n  \"use strict\";\n  // change code below this line\n  const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );;\n  // change code above this line\n  return squaredIntegers;\n};\n// test your code\nconst squaredIntegers = squareList(realNumberArray);\nconsole.log(squaredIntegers);"}
