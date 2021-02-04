const { Kafka } = require('kafkajs')

const produce = async () => {
  const kafka = new Kafka({
    clientId: 'kafka',
    brokers: ['localhost:9092']
  })

  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic: 'my-test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })

  await producer.disconnect()
}

produce();