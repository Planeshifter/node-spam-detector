var assert = require("assert");
var isSpam = require("../src/index.js");

describe("isSpam",function(){
	it("correctly detects spam URLs", function(done){
		isSpam("http://directproprietar.ro", function(err, bool){
	      assert(bool === true);
		});
		done();
	});
	
	it("correclty detects shortened spam URLs",function(done){
		isSpam("http://t.co/tZhtf5Fj7s", function(err, bool){
	      assert(bool === true);
		});
		done();
	});
	
	it("throws when not receiving a string as its input", function(done){
	  assert.throws(function(){
	   isSpam(23);
	  }, TypeError);
	  done();
	});
	
	it("throws when not receiving a valid URL as its input", function(done){
		assert.throws(function(){
		 isSpam("i am not a url");	
		});
		done();
	});
	
});