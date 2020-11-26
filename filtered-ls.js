const fs = require("fs");
const path = require("path")
const folder = process.argv[2];
const ext = process.argv[3]

fs.readdir(folder,(err,files)=> {
    if (err) throw err;
    
    else {
       let ls =  files.filter(el => path.extname(el) === "."+ext)
        ls.map(el => console.log(el))
    }
})

