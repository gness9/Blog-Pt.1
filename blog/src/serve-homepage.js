const db = require('./database');
const templates = require('./templates');

/** @function homepage
 * Serves the home page 
 * @param {http.IncomingMessage} req - the request object 
 * @param {http.ServerResponse} res - the response object
 */
function serveHomepage(req, res) {
  // TODO: Serve homepage
  var newestPost = db.prepare("SELECT * FROM posts ORDER BY date DESC LIMIT 1").get();
  var html = templates['post.html'](newestPost);
  res.setHeader('Content-Type', "text/html");
  res.setHeader('Content-Length', html.length);
  res.end(html);
}

module.exports = serveHomepage;