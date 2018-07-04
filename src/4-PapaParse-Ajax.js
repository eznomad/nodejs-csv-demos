var request = require('request');
var path = require('path');    

var Papa = require('papaParse');    

const displayData = row => console.log(`This row is displayed by displayData: ${row}`);

const url = 'https://g1.freshpatents.com/MOCK_DATA.csv';

const getCSV = url => { 
	request.get(url, function (error, response, body) {
    	if (!error && response.statusCode == 200) {
		  var data = body;
        Papa.parse(data, {
			step: function(row) {
				//  console.log("Row:", row.data);
				displayData(row.data);

			},
			complete: function(results) {
				 // console.log(results);
				 console.log('Success!')
			}
	  	});
        // Continue with your processing here.
		}
	});
}


getCSV(url);

