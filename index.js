const path = require('path');
const config = require('./config.js');

const {HttpServer} = require('@aliceo2/web-ui');

const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(path.join(__dirname, 'public'));

http.get('/getData', (req, res) => {
  const data = {
    name: 'webui',
    description: 'Some workshop about webui',
    version: '1.0.0',
    author: 'batman'
  };
  // res.status(200).json(data);
  res.status(500).json({message: 'There is a problem'});
});
