const Hapi = require('hapi');
const Good = require('good');

module.exports = function() {
  // Create a server with a host and port
  const server = new Hapi.Server();
  server.connection({
    host: '0.0.0.0',
    port: 80
  });

  // Add the route
  server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
      return reply('hello host');
    }
  });

  // Add the route
  server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {
      return reply('hello world');
    }
  });

  server.register({
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
              response: '*',
              log: '*'
            }]
          }, {
            module: 'good-console'
        }, 'stdout']
      }
    }
  }, (err) => {
    if (err) {
      throw err; // something bad happened loading the plugin
    }
    server.start((err) => {
      if (err) {
          throw err;
      }
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });
};
