//clean this damn json!
const jsesc = require('jsesc');

//console.log(jsesc('Ich ♥ Bücher',{'json': true}));
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('survey20180416.json')
});


lineReader.on('line', function (line) {
	
	const regex = /:\s\".*/;
	let m;
	if ((m = regex.exec(line)) !== null) { //matched right part
	    
	    //left side of the line
	    let rcontent = m[0];
	    rcontent = rcontent.substr(3);
	    rcontent = rcontent.substr(0,rcontent.length-2);
	    //console.log('Right side: '+rcontent);
	    //now the right
		const regleft = /^\t+\"\w+\":\s/;
		let n;	    
		let lcontent;
		if ((n = regleft.exec(line)) !== null) { //matched left
			//console.log('left side: '+n[0]);
			lcontent = n[0];
		}
		let outline = lcontent+jsesc(rcontent,{'json': true})
		//console.log(lcontent.indexOf('docs'));
		if (lcontent.indexOf('docs') != -1)
			console.log(outline);
		else
			console.log(outline+',');
	}
	else //if not matched, simply print
	{
		console.log(line);
	}
});