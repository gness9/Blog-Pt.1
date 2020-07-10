const avow = require('avow');
const axios = require('axios');
const cheerio = require('cheerio');

axios.get("http://localhost:3000").then(response => {
  if(response.status != 200) avow.fail(`Expected a 200 response, recieved ${response.status}`);
  
  var $ = cheerio.load(response.data);
  
  console.log("Your home page was served as:\n", `<div style="border: 1px solid black;">${response.data.toString()}</div>`);
  
  if($('h1').text() !== "Hello") avow.fail("Expected the home page to contain a `<h1>` with the content 'Hello'");
  if($('article').text().includes("Hello Blog!")) avow.pass();
  else avow.fail("Expected the home page to contain 'Hello Blog!'");
  
}).catch(err => {
  var errors = [`Encountered error.`];
  if(err.code === "ECONNREFUSED") errors.push("Unable to connect to your server.  Is it running?  Use `$ npm run start` to start it.");
  errors.push(err);
  avow.fail(errors);
});