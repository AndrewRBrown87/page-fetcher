// fetcher.js

const request = require('request');
const fs = require('fs');
var args = process.argv.slice(2);

//read from webpage
request(args[0], (error, response, body) => {
  //write file
  fs.writeFile(args[1], body, 'utf8', () => {
    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]} `);
  })
});
