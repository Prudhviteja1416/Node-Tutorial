const fs = require("fs");
const path = require("path");
let mapRoutes = (request, response) => {
  let url = request.url;
  if (url === "/") {
    fs.readFile(
      path.join(__dirname, "..", "views", "index.html"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        response.end(data);
      }
    );
  } else if (url === "/about") {
    fs.readFile(
      path.join(__dirname, "..", "views", "about.html"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        response.end(data);
      }
    );
  } else if (url === "/services") {
    fs.readFile(
      path.join(__dirname, "..", "views", "services.html"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        response.end(data);
      }
    );
  } else if (url === "/contact") {
    fs.readFile(
      path.join(__dirname, "..", "views", "contact.html"),
      "utf-8",
      (err, data) => {
        if (err) throw err;
        response.end(data);
      }
    );
  }
};
module.exports = mapRoutes;
