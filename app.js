var http = require('http'),
    fs = require('fs'),
    url = require('url');

var server = http.createServer(function (req, res) {
  //Products
  if(req.url === '/products') {
    if (req.method === 'POST') {
      res.end('Thank you!')
    }
    if (req.method === 'GET') {
      fs.readFile('views/products/index.html', function(err, file) {
        if (err) throw err
        res.setHeader('Content-Type', 'text/html')
        res.write(file)
        res.end()
      })
    }
  }
  if (req.url === '/products/new') {
    if (req.method === 'GET') {
      fs.readFile('views/products/users.html', function(err, file) {
        if (err) throw err
        res.setHeader('Content-Type', 'text/html')
        res.write(file)
        res.end()
      })
    }
  }
  //Users
  if(req.url === '/users') {
    if (req.method === 'POST') {
      res.end('Thank you!')
    }
    if (req.method === 'GET') {
    fs.readFile('views/users/index.html', function(err, file) {
      if (err) throw err
      res.setHeader('Content-Type', 'text/html')
      res.write(file)
      res.end()
    })
  }
}
  if (req.method === '/users/new') {
    if (req.method === 'GET') {
      fs.readFile('views/users/users.html', function(err, file) {
        if (err) throw err
        res.setHeader('Content-Type', 'text/html')
        res.write(file)
        res.end()
    })
  }
}

})

server.listen(8000, function () {
  console.log("Listening for requests on port 8000");
})
