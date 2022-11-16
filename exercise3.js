import fs from 'fs';

fs.readFile('test.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// https://nodejs.dev/en/learn/reading-files-with-nodejs/