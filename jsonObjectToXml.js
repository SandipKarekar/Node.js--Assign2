var jsonToXml = function (object, xmlFile, callback) {

	var fs = require('fs');

	fs.exists(xmlFile, function (exists) {
      
      var status = 'Success';
      if(exists) {
        // Warning to user about the 
        //.xml file already file exists.
        status = '\nFile named \'' + xmlFile + '\' already exists.\n\n\'Going to replace it\'.';

      }

      // Creating .xml file.

      var rootElement = require('xmlbuilder');

      rootElement = rootElement.create('students');

      var stud;// for student element
      var studName; // for name element
      var studScore; // for score element
    
      for (i = 0; i < object.students.length; i++) {
        stud = rootElement.ele('student', {'id': object.students[i].id});
    
        studName = stud.ele('name', object.students[i].fName + ' '
          + object.students[i].lName);
     
          studScore = stud.ele('score', object.students[i].score);
      }
    
      var xmlString = rootElement.end({ pretty: true, indent: '  ', newline: '\n' });
   
      fs.writeFile(xmlFile, xmlString, function (err){
        if (err) {
          callback('\nWe can not generate the XML file \"' + err + '\".', 'Fail');
        } else {
          callback(null, status);
        }
      });


    });
}

module.exports = {
	jsonToXml : jsonToXml
}