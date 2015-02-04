
var sortJsonObject = function (object, callback){
	
	var Validator = require('jsonschema').Validator;
              var v = new Validator();

              // JSON schema has to create having two schemas as :-
              // 'jsonOject' for Student object &
              // 'jsonSchema' for actual JSON input.

              var jsonObject = {
                  "id": "/StudentObject",
                  "type": "object",
                  "properties": {
                    "id": {"type": "integer", "minimum": 1, "required": true},
                    "fName": {"type": "string", "required": true},
                    "lName": {"type": "string", "required": true},
                    "score": {"type": "integer", "minimum": 1, "required": true},
                  },
                };

              var jsonSchema = {
                "id": "/JsonArrayObject",
                "type": "object",
                "properties": {
                  "students": {
                    "type": "array",
                    "items": {"$ref": "/StudentObject", "minimum": 1, "required": true}
                  }
               }
              }; 
  
              v.addSchema(jsonObject, '/StudentObject');
              var result = v.validate(object, jsonSchema);

              if(result.errors.length){
                // If JSON is not having expected format
                // we have to tell user about that and can't
                // go further. 
                callback("Input JSON is not having the required format " + result.errors,null);
              } else {

              	object.students = object.students.sort(function (a, b) {
                            return b.score - a.score;
                          });
              	callback(null, object);
              }
}


module.exports = {
	sortJsonObject : sortJsonObject
}