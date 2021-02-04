const { Kafka } = require('kafkajs')

const reset = async () => {
  const kafka = new Kafka({
    clientId: 'kafka',
    brokers: ['localhost:9092']
  })

  const admin = kafka.admin()

  await admin.connect()

  await admin.resetOffsets({
    groupId: 'my-test-group',
    topic: 'my-test-topic',
    earliest: true
  });

  await admin.disconnect()
}

reset();