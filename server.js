var express = require('express');
var app = express();
var logger = require('morgan');
PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.static('public'));

app.get('*', function(req, res){
  res.sendFile(process.cwd()+ '/public/index.html');
});

app.listen(PORT, function(){
  console.log('Connected on ', PORT);
});
