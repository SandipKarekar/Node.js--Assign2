
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