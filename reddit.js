let path = require("path");
let fs = require("fs");
let request = require("request");

let title1 = [];
let articleArray = [
  {
    title: [],
    url: [],
    author: []
  }
];

let redditData = path.join(__dirname, "./popular-articles.json");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

    let articleStuff = JSON.parse(body).data.children.map(item => {
        return {
          title: item.data.title,
          url: item.data.url,
          author: item.data.author
        };
      });
      articleArray = articleStuff;

    

  fs.appendFileSync(
    redditData,
    articleArray.map(item => {
      return item.title + "\n" + item.url + "\n" + item.author + "\n";
    })
  );
});