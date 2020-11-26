let filter = require('./mymodule')
let folder = process.argv[2]
let ext = process.argv[3]

filter(folder, ext, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})