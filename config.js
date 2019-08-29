module.exports = {
  kafka_topic: 'cat',
  kafka_topic2: 'dog',
  kafka_server: 'localhost:2181',
  // kafka_server: '192.168.99.100:2181',
  consumer_config:   {
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
    encoding: 'utf8',
    fromOffset: false
  }
};