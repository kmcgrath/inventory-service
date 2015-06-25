var redis = require('redis');

var args = [];
if (process.env.LINK_NAME) {
  var upper = process.env.LINK_NAME.toUpperCase();
  args = [process.env[upper + "_PORT_6379_TCP_PORT"], process.env.LINK_NAME];
}

var client = redis.createClient.apply(this,args);
 
client.on('connect', function() {
    console.log('connected');
});

client.set("books_count", "123", redis.print);
client.get("books_count", function (err, reply) {
    console.log('books_count = ' + reply.toString());
});
