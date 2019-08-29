const kafka = require('kafka-node');
const bp = require('body-parser');
const config = require('./config');

try {
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient(config.kafka_server);
  let consumer = new Consumer(
    client,
    [{ topic: config.kafka_topic2, partition: 0 }],
    config.consumer_config,
  );
  consumer.on('message', async function(message) {
    console.log(`kafka ${config.kafka_topic2}-> `, message.value);
  })
  consumer.on('error', function(err) {
    console.log('error', err);
  });
}
catch(e) {
  console.log(e);
}