// In this lession I learned how to use ana array of objects to loop up profiles.
{"index.js":"//Setup\nvar contacts = [\n    {\n        \"firstName\": \"Akira\",\n        \"lastName\": \"Laine\",\n        \"number\": \"0543236543\",\n        \"likes\": [\"Pizza\", \"Coding\", \"Brownie Points\"]\n    },\n    {\n        \"firstName\": \"Harry\",\n        \"lastName\": \"Potter\",\n        \"number\": \"0994372684\",\n        \"likes\": [\"Hogwarts\", \"Magic\", \"Hagrid\"]\n    },\n    {\n        \"firstName\": \"Sherlock\",\n        \"lastName\": \"Holmes\",\n        \"number\": \"0487345643\",\n        \"likes\": [\"Intriguing Cases\", \"Violin\"]\n    },\n    {\n        \"firstName\": \"Kristian\",\n        \"lastName\": \"Vos\",\n        \"number\": \"unknown\",\n        \"likes\": [\"JavaScript\", \"Gaming\", \"Foxes\"]\n    }\n];\n\n\nfunction lookUpProfile(name, prop){\n// Only change code below this line\nfor (var x = 0; x < contacts.length; x++ ) {\n    if(contacts[x].firstName === name ) {\n        if (contacts[x].hasOwnProperty(prop) ) {\n            return contacts[x][prop];\n        }else {\n            return \"No such property\";\n        }\n    }\n}\nreturn \"No such contact\";\n// Only change code above this line\n}\n\n// Change these values to test your function\nlookUpProfile(\"Akira\", \"likes\");"}
