import { Injectable } from '@nestjs/common';
import { Etcd3, Namespace } from 'etcd3';
import ConfigStoreRepository from './config-store.repository';

@Injectable()
export class EtcdRepository extends ConfigStoreRepository {
  constructor(private readonly etcdClient: Etcd3) {
    super();
  }

  async addBaseDirectory(path: string): Promise<void> {
    const configStore = this.etcd();
    const currentDirValue =
      (await configStore.get('basedirs').string()) || '[]';
    const currentDirs = JSON.parse(currentDirValue) as string[];

    if (!currentDirs.includes(path)) {
      currentDirs.push(path);
      await configStore.put('basedirs').value(JSON.stringify(currentDirs));
    }
  }

  async getBaseDirectories(): Promise<string[]> {
    const configStore = this.etcd();
    const dirValue = await configStore.get('basedirs').string();
    return dirValue ? JSON.parse(dirValue) : [];
  }

  private etcd(): Namespace {
    return this.etcdClient.namespace('config-store/base-directories/');
  }
}
