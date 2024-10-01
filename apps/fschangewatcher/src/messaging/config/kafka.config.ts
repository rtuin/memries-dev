import { registerAs } from '@nestjs/config';

export interface KafkaConfig {
  clientId: string;
  brokers: string[];
}

export default registerAs('kafka', () => ({
  clientId: process.env.KAFKA_CLIENT_ID || 'fs-change-watcher',
  brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
}));
