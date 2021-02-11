const request = require('request');
const args = process.argv.slice(2);
let url = args[0];
let path = args[1];
console.log(process.argv);
const fs = require("fs");

const myRequest = (callback1) => {
  request (url, (error, response, body) => {
    if (!error) {
      callback1(body);
    } else {
      throw new Error(`This is my error: ${error}`);
    }
  });
};

myRequest((body) => {
  fs.writeFile(path, body, (err) => {
    console.log(err);
  });
console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
});


// request(), (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// }
