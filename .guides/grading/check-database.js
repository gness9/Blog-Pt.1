const avow = require('avow');
const fs = require('fs');
const Database = require('better-sqlite3');

const dbPath = '.guides/grading/db/development.sqlite3';

try {
  fs.copyFileSync('blog/db/development.sqlite3', dbPath);

  var db = new Database(dbPath);

  var record = db.prepare("SELECT * FROM posts ORDER BY date DESC LIMIT 1;").get();

  console.log("Your last row in the posts table has data", record);

  if(record.title !== "Hello") avow.fail("Expected a title of 'Hello'.");
  if(record.content !== "Hello Blog!") avow.fail("Expected a content of 'Hello Blog!'");
  avow.pass();
} catch(err) {
  if(err.code === "ENOENT") avow.fail("Unable to find _db/development.sqlite3_.  Did you supply this file path as the parameter to your `Database()` constructor?")
  else avow.fail(["Encountered an errror", err]);
}