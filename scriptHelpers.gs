// I'm not positive that the functions found in this file won't blow up on you, or cause general errors! I cobbled it together. I don't have much use for prettyDate(), but I left
// it in as an example since it's a very small library. 

var LIBRARIES = {
  prettyDate:  "http://ejohn.org/files/pretty.js",
  underScore: "http://underscorejs.org/underscore-min.js",
}

// We'll now load all of the libraries references in LIBRARIES. This has to be done outside of a function or else the variables aren't set globally!
libraryNames = Object.keys(LIBRARIES);
for (x in libraryNames) {
  newFunc = loadFromUrl(LIBRARIES[libraryNames[x]]);
  eval('var ' + libraryNames[x] + ' = ' + newFunc);  
}


function loadFromUrl(url) {
  return eval(UrlFetchApp.fetch(url).getContentText());
}

function testing() {
  Logger.log(prettyDate("2017-01-04T22:24:17Z")); // For whatever reason, in prettyDate() the date has to be within the previous 2 months. So adjust as neccessary for testing.
  _.each([4,5,6,7,8], function(x) { Logger.log("This one is " + x)});
  Logger.log(_.map([1, 2, 3], function(num){ return num * 3; }));
}

