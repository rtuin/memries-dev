import { Injectable } from '@nestjs/common';
import { BaseDirectory } from '../dto/file-location-config.dto';
import ConfigStoreRepository from '../repositories/config-store.repository';

@Injectable()
export class FileLocationConfigService {
  constructor(private readonly configRepository: ConfigStoreRepository) {}

  async addBaseDir(baseDir: BaseDirectory): Promise<void> {
    this.configRepository.addBaseDirectory(baseDir.path);
  }

  async getBaseDirs(): Promise<BaseDirectory[]> {
    const paths = await this.configRepository.getBaseDirectories();
    return paths.map((path) => ({ path }));
  }
}
