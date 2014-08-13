var url = require("url");
var dns = require("dns");

var blacklists = ["multi.uribl.com"];


function isSpam(input_url, callback){
 
  var parsedUrl = url.parse(input_url);
  var host = parsedUrl.hostname;
  var res = false;
  
  host = host.replace(/w{3}\.(.+\.)/i,"$1");
 
  blacklists.forEach(function(elem){
    var query_domain = host + "." + elem; 
    dns.resolve4(query_domain, function(err, data){
	  if (data.length > 0 ){
	    res = true;
	  }
	  callback(err, res);
    });
  });
}

exports.isSpam = isSpam;

