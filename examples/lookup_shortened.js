var isSpam = require("../src/index.js");

isSpam("http://bit.ly/1ti00KM", function(err, data) { 
  console.log(data)
})

isSpam("http://t.co/tZhtf5Fj7s", function(err, data) { 
  console.log(data)
})