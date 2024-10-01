import { KafkaMessagingProducer } from './kafka-messaging.producer';

describe('KafkaProducer', () => {
  it('should be defined', () => {
    expect(new KafkaMessagingProducer()).toBeDefined();
  });
});
