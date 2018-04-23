//clean this damn json!
const jsesc = require('jsesc');

//console.log(jsesc('Ich ♥ Bücher',{'json': true}));
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('surveyv.json')
});


lineReader.on('line', function (line) {
	
	const regex = /^\t+\"[q|d]\w+\":\s/;
	let m;
	if ((m = regex.exec(line)) !== null) { //matched question
	    
	    //left side of the line
	    let outline = m[0] + ' ""';

	    if(outline.indexOf('docs') != -1)
	    	console.log(outline);
	    else
	    	console.log(outline+',');
	}
	else //if not matched, simply print
	{
		console.log(line);
	}
});