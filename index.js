const path = require('path');
const config = require('./config.js');

const {HttpServer, WebSocket, WebSocketMessage} = require('@aliceo2/web-ui');

const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(path.join(__dirname, 'public'));

http.get('/getData', (req, res) => {
  const data = {
    name: 'webui',
    description: 'Some workshop about webui',
    version: '1.0.0',
    author: 'batman'
  };
  res.status(200).json(data);
  // res.status(500).json({message: 'There is a problem'});
});

const ws = new WebSocket(http);

setInterval(function() {
  console.log('Sending data')
  const message = new WebSocketMessage();
  message.command = 'random';
  message.payload = (Math.floor(Math.random() * 100)).toString();
  
  ws.broadcast(message);
}, 5000);