
module.exports.ready = false;
module.exports.options = {};
module.exports.msg = false;

module.exports.setClient = function (client) {

  this.client = client;

  this.client.on('ready', () => {
    console.log('Package is working.');
    module.exports.ready = true;
  })

};

module.exports.ping = function (messageObj) {

    if(module.exports.ready === false) {
      return new RangeError('You must set your client.');
    };

    let msg = messageObj

    msg.channel.send(`Pong! ${msg.createdTimestamp}`)

}
