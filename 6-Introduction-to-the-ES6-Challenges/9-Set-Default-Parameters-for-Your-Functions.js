/* In this lesson I learned how to set default parameters for functions.  */
{"index.js":"const increment = (function() {\n  \"use strict\";\n  return function increment(number, value = 1) {\n    return number + value;\n  };\n})();\nconsole.log(increment(5, 2)); // returns 7\nconsole.log(increment(5)); // returns 6"}
