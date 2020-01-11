'use strict';

const child_process = require('child_process');
//import { spawn } from 'child_process'; //const child_process = import

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
});
console.log(`FORKEDZOR`);
