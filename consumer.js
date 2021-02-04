const { Kafka } = require('kafkajs')

const startConsuming = async () => {

  const kafka = new Kafka({
    clientId: 'kafka',
    brokers: ['localhost:9092']
  })

  const consumer = kafka.consumer({ groupId: 'my-test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic: 'my-test-topic', fromBeginning: true })


  const shutdown = async () => {
    console.log('**** Gracefully Shutting Down **** \n\n')
    await consumer.disconnect();
  }

  process
    .on('SIGTERM', shutdown)
    .on('SIGINT', shutdown)
    .on('SIGHUP', shutdown)

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })


}

startConsuming();