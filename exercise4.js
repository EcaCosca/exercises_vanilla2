var fs = require('fs');

fs.readFile('test.html', 'utf8', function(err, data){
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// https://nodejs.dev/en/learn/reading-files-with-nodejs/