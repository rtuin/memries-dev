import { Module } from '@nestjs/common';
import { ConfigStoreModule } from '../config-store/config-store.module';

@Module({
  imports: [ConfigStoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
