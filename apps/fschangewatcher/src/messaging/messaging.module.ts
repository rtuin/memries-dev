import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Kafka } from 'kafkajs';
import kafkaConfig, { KafkaConfig } from './config/kafka.config';
import { KafkaMessagingProducer } from './producers/kafka-messaging.producer';
import { FsEventProducerService } from './services/fs-event-producer.service';

@Module({
  imports: [ConfigModule.forFeature(kafkaConfig)],
  providers: [
    FsEventProducerService,
    {
      provide: 'MessagingProducer',
      useClass: KafkaMessagingProducer,
    },
    {
      provide: 'KAFKA_CLIENT',
      useFactory: (configService: ConfigService) => {
        const config = configService.get('kafka') as KafkaConfig;
        return new Kafka({
          clientId: config.clientId,
          brokers: config.brokers,
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [FsEventProducerService],
})
export class MessagingModule {}
