module.exports = {
  kafka_topic: 'example',
  kafka_topic2: 'example2',
  kafka_server: 'localhost:2181',
  consumer_config:   {
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
    encoding: 'utf8',
    fromOffset: false
  }
};