/* In this lesson I learned how to use the spread operator to evaluate arrays. The spread array uses ... inorder to evaluate an array. */
{"index.js":"const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];\nlet arr2;\n(function() {\n  \"use strict\";\n  arr2 = [...arr1]; // change this line\n})();\nconsole.log(arr2);"}
