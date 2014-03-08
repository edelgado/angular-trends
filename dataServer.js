var http = require('http');
// Node callback for an HTTPrequest
function onRequest(req, res) {
  if (req.url == '/data.json') {
    res.writeHead(200, {
     'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(getTrendData()));
  }
  console.log('Incoming connection from ' + req.connection.remoteAddress);    
}

function getTrendData() {
  var data = {
    date: '2010-01',
    value: 80
  }
  return data;
}

var server = http.createServer(onRequest).listen(3000, '0.0.0.0');
console.log('Ready Freddy.');