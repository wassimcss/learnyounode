fs = require("fs");
let  content = fs.readFileSync(process.argv[2]);
let n = content.toString().split("\n").length - 1;
console.log(n)