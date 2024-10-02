import { Module } from '@nestjs/common';
import { ConfigStoreModule } from '../config-store/config-store.module';
import { BaseDirectoryConfigController } from './controllers/base-directory-config/base-directory-config.controller';

@Module({
  imports: [ConfigStoreModule],
  controllers: [BaseDirectoryConfigController],
})
export class ApiModule {}
