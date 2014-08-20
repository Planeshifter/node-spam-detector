var url = require("url");
var dns = require("dns");
var unshortener = require("unshortener");
var async = require("async");

var blacklists = ["multi.uribl.com", "zen.spamhaus.org", "multi.surbl.org'"];

function isSpam(input_url, callback){
 
  var invalidParamError = null;	  
  if (!(typeof input_url == 'string' || input_url instanceof String)){
    invalidParamError =  new TypeError("Function expects a string as its first argument");
  }
  if (url.parse(input_url).hostname === null){
    invalidParamError =  new TypeError("First argument is not a valid URL.");
  }
  
  if(invalidParamError){
	    callback(invalidParamError);
	    return;
  }
	    	
  unshortener.expand(input_url, function(err, original_url){

	  var parsedUrl = url.parse(original_url);
	  var host = parsedUrl.hostname;
	  var res = false;
	  host = host.replace(/w{3}\.(.+\.)/i, "$1");
	  
	  var queryDomains = blacklists.map(function(elem){
	    return host + "." + elem; 
	  });
	 
	  async.map(queryDomains, dns.resolve4, function(err, data){

		isSpamUrl = data.filter(function(elem){
			return !!elem;
		});
		
		if (isSpamUrl.length > 0 ){
		  res = true;
		}
	    callback(err, res);
	  });
	  
  });
	
}

module.exports = isSpam;

