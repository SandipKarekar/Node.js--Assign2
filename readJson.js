 /**
  * Reads the JSON file and parses it into the JSON object and returns it.
  * @param {name of the file} filename.
  * @param {function containing returned values as 1.Error, 2.Parsed JSON object } callback.
  * For that it does the exception & error handling regarding file and JSON syntax.
  */
var readJsonFile = function (filename,callback) {
  
  var fs = require('fs');
  
  fs.exists(filename, function (exists){
  	if(exists){
  		fs.readFile(filename, 'utf8', function (err, data) {  
          if (err) {
          	callback('\nError while reading the file' + err.message, null);
          } else {
            try {
              var studentObject = JSON.parse(data);
              callback(null,studentObject);
            } catch (err) {
              callback('\nError while parsing the JSON file ' + err.message, null);
            }
          }
      });
  	} else {
  		callback('\"Source file does not exists\"', null);
  	}
  });
}

module.exports = {
	readJsonFile: readJsonFile
}