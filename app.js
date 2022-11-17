/**
 *
 * @file: app.js
 * @author: Ian Neal Higginson
 * @version: 1.13112022.2000
 *
 * process.stdout.write("\u001B[?25l"); // hides cursor
 * process.stdout.write("\u001B[?25h"); // show cursor
 *
 */

"use strict";

const Dtc = require("./dateTimeClass.js");

var sa, la, ta;

let dtc = new Dtc();

process.stdout.write("                 Meditation with Nodejs \n");
process.stdout.write("\u001B[?25l");

setInterval(() => {
 sa = dtc.shortDate();
 la = dtc.longDate();
 ta = dtc.theTime();
 process.stdout.clearLine(0);
 process.stdout.cursorTo(0);
 process.stdout.write(` ${sa}     ${la}     ${ta} `);
}, 1000);

process.stdin.once("data", (keyStroke) => {

 if (keyStroke.length > 0) {
  process.stdout.write(`\u001B[?25h`);
  process.exit(0);
 }

});
