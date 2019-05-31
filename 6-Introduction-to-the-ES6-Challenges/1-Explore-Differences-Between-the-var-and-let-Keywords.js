/* In this lesson I learned how to discern between var and let keywords. Var keywords can be overwritten, a let keyword cannot. */
{"index.js":"let catName;\nlet quote;\nfunction catTalk() {\n  \"use strict\";\n\n  catName = \"Oliver\";\n  quote = catName + \" says Meow!\";\n\n}\ncatTalk();"}
