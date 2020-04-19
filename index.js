#!/usr/bin/env node

/* eslint-disable no-console */
const resetTerminalColor = '\x1b[0m';
const fgColor = '\x1b[34m';
const bgColor = '\x1b[47m';

const log = (message) => {
  console.log(`${fgColor}${bgColor}%s`, message, resetTerminalColor);
};

console.log('\n');
log('                                                        ');
log(' ------------------------------------------------------ ');
log('|  Eyad Kobatte / eyadkobatte.com                      |');
log('|                                                      |');
log('|  Twitter:  https://twitter.com/EyadKobatte           |');
log('|  GitHub:   https://github.com/eyadkobatte            |');
log('|  LinkedIn: https://www.linkedin.com/in/eyadkobatte/  |');
log('|  Website:  https://eyadkobatte.com                   |');
log('|  Blog:     https://blog.eyadkobatte.com              |');
log(' ------------------------------------------------------ ');
log('                                                        ');
console.log('\n');
