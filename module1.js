
var readJsonFile = function (filename) {
  
  var fs = require('fs');
  
  fs.exists(filename, function (exists){
  	if(exists){
  		fs.readFile(filename, 'utf8', function (err, data) {  
          if (err) {
          	console.log('\nError while reading the file' + err.message);
          } else {
            console.log('\nFile given for JSON is: \'' + filename + '\'');
            try {
              var studentObject = JSON.parse(data);
              console.log(studentObject);
              //return data.toString();
            } catch (err) {
              console.log('\nError while parsing the JSON file ' + err.message);
            }
          }
      });
  	} else {
  		console.log('\"Source file does not exists\"');
  	}
  });
}

module.exports = {
	readJsonFile: readJsonFile
}