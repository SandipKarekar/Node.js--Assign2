var jsonToText = function (object, destinFile, callback){

	var fs = require('fs');

	fs.exists(destinFile, function (exists) {
          
      if(exists) {
        // Warning to user about the 
        //.txt file already file exists.
        callback(null,'\nFile named \'' + destinFile + '\' already exists\n\n\'Going to replace it\'');
      }
	  fs.writeFile(destinFile, 'First Name | Last Name | Score \n', function (err) {
		if(err){
          // We cannot write to the file so that we are here.
          // we have to notify that about user.
          callback('\nWe can not write to the file \"' + err + '\"', 'fail');
          } else {
            
            for (var i = 0; i < object.students.length; i++) {
              fs.appendFile(destinFile, object.students[i].id + ' | ' 
                + object.students[i].fName + ' | '
                + object.students[i].lName + ' | '
                + object.students[i].score + '\n', function (err) {
                if (err) { 
                  callback('\nError while appending the file ' + err.message, 'fail')
                } else {
                  callback(null, 'Success')
                }
              });
            }
          }
      });
	});
}

module.exports = {
	jsonToText : jsonToText
}