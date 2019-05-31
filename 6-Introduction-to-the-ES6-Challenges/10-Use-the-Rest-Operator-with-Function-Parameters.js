/* In this lesson I learned how to use the rest operator with function parameters. The rest operator eliminates the need to check the args array. */
{"index.js":"const sum = (function() {\n  \"use strict\";\n  return function sum(...args) {\n    return args.reduce((a, b) => a + b, 0);\n  };\n})();\nconsole.log(sum(1, 2, 3)); // 6"}
