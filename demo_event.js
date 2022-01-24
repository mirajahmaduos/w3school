var fs = require('fs');

var readStream = fs.createReadStream('./demofile.txt');

readStream.on('open', function(){
    console.log('the file is open');
});