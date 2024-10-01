import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import path from 'path';
import { AppModule } from './app/app.module';
import { FsWatcherService } from './app/services/fs-watcher.service';
import { KafkaMessagingProducer } from './messaging/producers/kafka-messaging.producer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const producer = app.get('MessagingProducer') as KafkaMessagingProducer;
  await producer.onModuleInit();

  const watcherService = app.get(FsWatcherService) as FsWatcherService;
  watcherService.start(path.join(__dirname, '..', '..', '..', 'tmp'));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`👀 Memries FS change watcher is running...`);
}

bootstrap();
