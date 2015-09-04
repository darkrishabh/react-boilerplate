var server = require('pushstate-server');

server.start({
  port: process.env.PORT || 3100,
  directory: './build'
});
