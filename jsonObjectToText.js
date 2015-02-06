/**
  * Reads the JSON object and writes the its data into text file.
  * @param {Sorted JSON object} object.
  * @param {filename where the data should be written} destinFile. 
  * @param {function containing the errors and status of the process} callback
  * In this it does error handlings regarding the file and sends the errors if any and the status of the process.
  */
var jsonToText = function (object, destinFile, callback){

	var fs = require('fs');

	fs.exists(destinFile, function (exists) {
          
      var status = 'Success';
      if(exists) {
        // Warning to user about the 
        //.txt file already file exists.
        status = '\nFile named \'' + destinFile + '\' already exists.\n\n\'Going to replace it\'.';
      }
	  fs.writeFile(destinFile, 'First Name | Last Name | Score \n', function (err) {
		if(err){
          // We cannot write to the file so that we are here.
          // we have to notify that about user.
          callback('\nWe can not write to the file \"' + err + '\".', 'Fail');
          } else {
            
            for (var i = 0; i < object.students.length; i++) {
              fs.appendFile(destinFile, object.students[i].id + ' | ' 
                + object.students[i].fName + ' | '
                + object.students[i].lName + ' | '
                + object.students[i].score + '\n', function (err) {
                if (err) { 
                  callback('\nError while appending the file ' + err.message + '.', 'Fail')
                } 
              });
            }
            callback(null, status);
          }
      });
	});
}

module.exports = {
	jsonToText : jsonToText
}