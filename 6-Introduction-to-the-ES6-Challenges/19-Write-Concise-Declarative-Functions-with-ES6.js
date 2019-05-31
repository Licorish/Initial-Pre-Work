/* In this lesson I learned how to declare functions in a concise manner in ES6 by removing the function keyword and colon when defining functions.. */
{"index.js":"// change code below this line\nconst bicycle = {\n  gear: 2,\n  setGear(newGear) {\n    \"use strict\";\n    this.gear = newGear;\n  }\n};\n// change code above this line\nbicycle.setGear(3);\nconsole.log(bicycle.gear);"}
