// In this lesson I learned how to  access nested objects.
{"index.js":"// Setup\nvar myStorage = {\n  \"car\": {\n    \"inside\": {\n      \"glove box\": \"maps\",\n      \"passenger seat\": \"crumbs\"\n     },\n    \"outside\": {\n      \"trunk\": \"jack\"\n    }\n  }\n};\n\nvar gloveBoxContents = myStorage.car.inside[\"glove box\"]; // Change this line\n"}
