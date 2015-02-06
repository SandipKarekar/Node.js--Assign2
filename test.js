/**
  * This file uses all the modules created for reading and parsing JSON, sorting it 
  * and writing the sorted JSON object into the text file and XML file.
  */ 
 var sourceFile = 'source.json';
 var destinFile = 'destinatin.txt';
 var xmlFile = 'final.xml';

 var s = require('readJson'); // Module for reading the JSON file and parsing it into object.

 s.readJsonFile(sourceFile,function (err, result){

 	if(err){

      console.log('\n' + err + '.'); 		

 	} else {

      console.log('\nSourcefile for JSON is: \'' + sourceFile + '\'.');

 	  var j = require('sortJsonObject'); // Module for sorting the object created by parsing the JSON file.

      j.sortJsonObject(result, function (err, sortedObject){

        if(err){

          console.log('\n' + err + '.'); 		
      
 	    } else {

          var k = require('jsonObjectToText'); // Module for writing the object created by parsing the JSON file, into text file.

          k.jsonToText(sortedObject, destinFile, function (err, status){

            if(err){

              console.log('\n' + err + '.'); 		
      
 	        } else {

 	          console.log('\n' + status + '.');

 	          console.log('\nData written to file: \'' + destinFile + '\'.');

              var l = require('jsonObjectToXml'); // Module for writing the object created by parsing the JSON file, into XML file.

              l.jsonToXml(sortedObject, xmlFile, function (err, status){

                if(err){

                  console.log('\n' + err + '.'); 		
      
 	            } else {

 	            	console.log('\n' + status + '.');

 	            	console.log('\nData written in XML file : \'' + xmlFile + '\'.');
 	            }

              });
            }

          });
        }
    
      });
 	}
 });