import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import {
  CompressionTypes,
  Kafka,
  Message,
  Partitioners,
  Producer,
} from 'kafkajs';
import { MessagingProducer } from './messaging.producer';

@Injectable()
export class KafkaMessagingProducer
  implements MessagingProducer, OnModuleInit, OnModuleDestroy
{
  private readonly producer: Producer;

  constructor(@Inject('KAFKA_CLIENT') private readonly kafka: Kafka) {
    this.producer = this.kafka.producer({
      createPartitioner: Partitioners.DefaultPartitioner,
    });
  }

  async publish(topic: string, message: Message): Promise<void> {
    // if (!this.producer.) {
    //   await this.producer.connect();
    // }
    await this.producer.send({
      topic,
      messages: [message],
      compression: CompressionTypes.GZIP,
    });
  }

  public async onModuleInit() {
    console.log('Connecting....');
    await this.producer.connect();
  }

  public async onModuleDestroy() {
    await this.producer.disconnect();
  }
}
