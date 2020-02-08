'use strict';

const child_process = require('child_process');
const fs = require('fs');

// ZOMG THIS WORKS
let child = child_process.spawn(
  'vim',
  ['/tmp/yarr'],
  {
    stdio: 'inherit',
  }
);

child.on('close', (code) => {
  console.log(`IN FORK: ${code}`);
  fs.readFile('/tmp/yarr', 'utf8', (err, data) => {
    if (err) {
      console.log(`Couldn't read file: ${err}`);
      return;
    }
    console.log(data);
  });


});
console.log(`FORKEDZOR`);
