/* In this lesson I learned how to use assign variables using destructuring assignment.*/
{"index.js":"let a = 8, b = 6;\n(() => {\n  \"use strict\";\n  // change code below this line\n  [a,b] = [b,a];\n  // change code above this line\n})();\nconsole.log(a); // should be 6\nconsole.log(b); // should be 8"}
