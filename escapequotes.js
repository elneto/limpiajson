//clean this damn json!
const jsesc = require('jsesc');

//console.log(jsesc('Ich ♥ Bücher',{'json': true}));
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('surveyv.json')
});

function unescape(lit) {
    var newlit = "";
    for (var i = 0; i < lit.length; i++) {

        if (lit.charAt(i) == '\\' && lit.charAt(i + 1) == 'u') {
            let c = lit.substr(i + 2, 4);
            let un = '0x' + c;
            //console.log(String.fromCharCode(un));
            newlit += String.fromCharCode(un);
            i += 5;
        } else if (lit.charAt(i) == '\\' && lit.charAt(i + 1) == '"') {
            newlit += '\\"';
            i += 1;
        } else if (lit.charAt(i) == '\\') {
            //don't add anything
        } else {
            //console.log(lit.charAt(i));
            newlit += lit.charAt(i);
        }
    }

    return newlit;
}

lineReader.on('line', function(line) {

    const regex = /:\s\".*/;
    let m;
    if ((m = regex.exec(line)) !== null) { //matched right part

        //left side of the line
        let rcontent = m[0];
        rcontent = rcontent.substr(3);
        rcontent = rcontent.substr(0, rcontent.length - 2);
        //console.log('Right side: '+rcontent);
        //now the right
        const regleft = /^\t+\"\w+\":\s/;
        let n;
        let lcontent;
        if ((n = regleft.exec(line)) !== null) { //matched left
            //console.log('left side: '+n[0]);
            lcontent = n[0];
        }
        rcontent = jsesc(rcontent, { 'json': true });
        let outline = lcontent + rcontent;
        //console.log(lcontent.indexOf('docs'));
        if (lcontent.indexOf('docs') != -1)
            console.log(outline);
        else
            console.log(outline + ',');
    } else //if not matched, simply print
    {
        console.log(line);
    }
});