[![NPM version](https://badge.fury.io/js/spam-detector.svg)](http://badge.fury.io/js/spam-detector)
[![build status](https://secure.travis-ci.org/Planeshifter/node-spam-detector.png)](http://travis-ci.org/Planeshifter/node-spam-detector)

node-spam-detector
======================

This little module exposes a single function which can be used to check whether a given URL is considered spam after consulting several major domain blacklists. Under the hood, the function first uses the `unshortener` package to 
reduce the URL to its original form in case that it was shortened. It then makes DNS calls to blacklists provided by URIBL, Spamhaus and SURBL.

## Installation & Loading

The module can be easily installed via npm:

``` 
npm install spam-detector
```

To use it in a project, require the package with the command 

```
isSpam = require("spam-detector");
```

## Syntax

### isSpam(url, callback)

The function has two parameters: The first is the URL which has to be checked, and the second is a callback function of the form `function(err, data)`. The first argument `err` is equal to `null` if no error has occured during checking and an Error object otherwise. The second argument is a Boolean value which evaluates to `true` in case that the supplied URL is considered to be spam and `false` otherwise.

Example: 

```
var isSpam = require("spam-detector");
isSpam("http://www.github.com", function(err, data){
console.log(data);
});
```

Output: 

```
false
```
