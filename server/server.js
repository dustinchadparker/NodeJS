let path = require("path");
let fs = require("fs");

let chirpObjects = [
  {
    text: "This is the first chirp."
  },
  {
    text: "This is the second chirp."
  },
  {
    text: "This is the third chirp."
  },
  {
    text: "This is the fourth chirp."
  },
  {
    text: "This is the last chirp."
  }
];

let chirpPath = path.join(__dirname, "../chirps.json");
fs.appendFileSync(
  chirpPath,
  chirpObjects.map(item => {
    return item.text + "\n";
  })
);
