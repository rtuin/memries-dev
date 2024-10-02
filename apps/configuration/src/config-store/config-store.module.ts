import { Module } from '@nestjs/common';
import { Etcd3 } from 'etcd3';
import ConfigStoreRepository from './repositories/config-store.repository';
import { EtcdRepository } from './repositories/etcd.repository';
import { FileLocationConfigService } from './services/file-location-config.service';

@Module({
  providers: [
    FileLocationConfigService,
    {
      provide: ConfigStoreRepository,
      useClass: EtcdRepository,
    },
    {
      provide: Etcd3,
      useClass: Etcd3,
    },
  ],
  exports: [FileLocationConfigService],
})
export class ConfigStoreModule {}
