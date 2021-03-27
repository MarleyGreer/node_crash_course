const Logger = require("./logger");
const http = require("http");
const path = require("path");
const fs = require("fs");

const logger = new Logger();
logger.on("message", (data) => console.log("Called Listener!", data));
logger.log("Hello World");

const practiseServer = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/api/users") {
    const users = [
      { name: "Bob Smith", age: 40 },
      { name: "John Doe", age: 30 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

const server = http.createServer((req, res) => {
  // Build The File Path
  // Turnarary operator to establish if the page is the home page, if so
  // Filepath will be index.html, otherwise the applicable filename eg '/about'
  // Will be 'about.js'
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  // Get the extension of the file eg. .js .html .png
  let extname = path.extname(filePath);

  // Initial/Default Content Type
  let contentType = "text/html";

  // Check ext and set content type based on the extention provided.
  // If not listed, it will stay as default text/html.
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Reading the file and checking for errors
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
