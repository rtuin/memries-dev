import { Module } from '@nestjs/common';

import { MessagingModule } from '../messaging/messaging.module';
import { FsWatcherService } from './services/fs-watcher.service';

@Module({
  imports: [MessagingModule],
  controllers: [],
  providers: [FsWatcherService],
})
export class AppModule {}
