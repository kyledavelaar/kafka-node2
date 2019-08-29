
const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');

try {
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient(config.kafka_server);
  const producer = new Producer(client);

  let catCount = 0;
  let dogCount = 0;å

  producer.on("ready", function() {
    console.log("ready");


    setInterval(function() {
      let payloads = [
        { topic: config.kafka_topic, messages: `I have ${catCount} cats`, partition: 0 }
      ];

      producer.send(payloads, function(err, data) {
        console.log(data);
        catCount += 1;
      });
    }, 5000);

    setInterval(function() {
      let payloads = [
        { topic: config.kafka_topic2, messages: `I have ${dogCount} dogs`, partition: 0 }
      ];

      producer.send(payloads, function(err, data) {
        console.log(data);
        dogCount += 1;
      });
    }, 5000);



  });





  producer.on('error', function(err) {
    console.log(err);
    console.log('[kafka-producer -> '+config.kafka_topic+']: connection errored');
    throw err;
  });

}
catch(e) {
  console.log(e);
}