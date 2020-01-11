const app = require('./app.js');
const blessed = require('blessed');

function run() {
  app.initialize();
  app.render({ screen: "list" });
  return;
}


function yarr() {
  console.log("YARR")
  console.log(app.yarr)


  let program = blessed.program();

  program.key('q', function(ch, key) {
    program.clear();
    program.disableMouse();
    program.showCursor();
    program.normalBuffer();
    process.exit(0);
  });

  program.on('mouse', function(data) {
    if (data.action === 'mousemove') {
      program.move(data.x, data.y);
      program.bg('red');
      program.write('x');
      program.bg('!red');
    }
  });

  program.alternateBuffer();
  program.enableMouse();
  program.hideCursor();
  program.clear();

  program.move(1, 1);
  program.bg('black');
  program.write('Hello world', 'blue fg');
  program.setx((program.cols / 2 | 0) - 4);
  program.down(5);
  program.write('Hi again!');

  program.bg('!black');
  program.feed();

  return;
}

yarr();

module.exports = yarr; //run;
