
if (process.env.NODE_ENV === "production") {  
	module.exports = require("./dist/prod.bundle.js");
  } else {  
	module.exports = require("./dist/dev.bundle.js");
  }