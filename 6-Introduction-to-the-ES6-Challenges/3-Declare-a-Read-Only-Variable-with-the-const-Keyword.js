/* In this lesson I learned how to declare a read only variable using the const keyword.*/
{"index.js":"function printManyTimes(str) {\n  \"use strict\";\n\n  // change code below this line\n\n  const SENTENCE = str + \" is cool!\";\n  for(let i = 0; i < str.length; i+=2) {\n    console.log(SENTENCE);\n  }\n\n  // change code above this line\n\n}\nprintManyTimes(\"freeCodeCamp\");"}
