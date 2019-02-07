let path = require("path");
let fs = require("fs");
let request = require("request");

let images = [
  {
    url: [],
    id: []
  }
];
let pathReq = [".gif", ".jpg", ".png"];

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  let imageStuff = JSON.parse(body).data.children.map(item => {
    return {
      url: item.data.url,
      id: item.data.id
    };
  });

  images = imageStuff;

  images.map(item => {
    if (pathReq.some(urlEnd => urlEnd === path.extname(item.url))) {
        
      console.log(item.url);
      return fs.writeFile(`./downloads/${item.id}.json`, item.url, err => {
        if (err) console.log(err);
      });
    }
  });
});
