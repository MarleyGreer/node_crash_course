const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder Created");
// });

// Create and write to file ..Overriddes whatever is already in file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("Wrote to file successfully 'Hello World!");
  }
);

// Create and write to file ..Appends/Adds to  whatever is already in file

fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "I love Node Js!!",
  (err) => {
    if (err) throw err;
    console.log("Appended to file successfully I love Node Js!");
  }
);

// As Node.js is asynchronous, to ensure the writeFile function runs before the appendFile, we need to
// add the appendFile function into the writeFile's callback as per below:
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Writing to file here for the second time",
  (err) => {
    if (err) throw err;
    console.log("Successfully added Writing to file here for the second time");
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "Appending to file here for the second time",
      (err) => {
        if (err) throw err;
        console.log(
          "Successfully added Appending to file here for the second time"
        );
      }
    );
  }
);

// Read File

fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename File hello.txt to updated_file_name.txt
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "updated_file_name.txt"),
  (err) => {
    if (err) throw err;
    console.log("File has been renamed!!");
  }
);
