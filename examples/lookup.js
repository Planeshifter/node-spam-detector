var isSpam = require("../src/index.js");

isSpam("http://directproprietar.ro", function(err, data){ 
  console.log(data);
});
