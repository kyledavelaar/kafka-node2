
const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');

try {
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient(config.kafka_server);
  const producer = new Producer(client);
  const kafka_topic = 'example';
  console.log(kafka_topic);
  let payloads = [
    {
      topic: kafka_topic,
      messages: config.kafka_topic
    }
  ];


  let count = 0;

  producer.on("ready", function() {
    console.log("ready");
    setInterval(function() {
      payloads = [
        { topic: kafka_topic, messages: `I have ${count} cats`, partition: 0 }
      ];

      producer.send(payloads, function(err, data) {
        console.log(data);
        count += 1;
      });
    }, 5000);
  });

  producer.on('error', function(err) {
    console.log(err);
    console.log('[kafka-producer -> '+kafka_topic+']: connection errored');
    throw err;
  });
}
catch(e) {
  console.log(e);
}