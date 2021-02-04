# reset-topic-offset

This repo contains an example to reproduce a bug found while trying to reset the offset of a Kafka Topic to the earliest one. 

The expected behaviour was for the consumer not to consume any messages after the reset but the result was the oposite.
 

- `producer.js` - produces a single message to `my-test-topic` and disconnects.
- `consumer.js` - consumes messages from `my-test-topic` using groupId `my-test-group` and logs each message to console.
- `admin.js` - tries to reset the offset for `my-test-group` to earliest.

## Installation 

After cloning the repo run `npm install` to get kafkajs.

## Running 

Example flow:

1. Run `producer.js` one or many times to produce messages.
2. Run `admin.js` to try to reset the offset.
3. Run `consumer.js` to get the unexpected behaviour.

