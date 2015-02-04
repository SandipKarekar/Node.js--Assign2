 
 var s = require('module1')

 s.readJsonFile('source.json',function (err, result){

 	console.log(err,result);

 	var j = require('module2')

    j.sortJsonObject(result, function (err, result){

      console.log(err,result);

      var k = require('module3')

      k.jsonToText(result, 'destinatin.txt', function (err, status){

        console.log(err, status);

      });
    
    });

 });