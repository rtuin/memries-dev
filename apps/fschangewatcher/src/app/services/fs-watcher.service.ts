import { Injectable } from '@nestjs/common';
import chokidar from 'chokidar';
import ExifReader from 'exifreader';
import { FsEventProducerService } from '../../messaging/services/fs-event-producer.service';

@Injectable()
export class FsWatcherService {
  private watchedDirs: string[] = [];

  constructor(private readonly fsEventProducer: FsEventProducerService) {}

  start(dirs: string | string[]): void {
    const dirsToWatch = Array.isArray(dirs) ? dirs : [dirs];

    dirsToWatch.forEach((dir) => {
      if (!this.watchedDirs.includes(dir)) {
        this.watchDir(dir);
        this.watchedDirs.push(dir);
      }
    });
  }

  private watchDir(dir: string): void {
    const watcher = chokidar.watch(dir, { persistent: true });

    watcher
      .on('add', (path) => this.handleFsEvent('add', path))
      .on('change', (path) => this.handleFsEvent('change', path))
      .on('unlink', (path) => this.handleFsEvent('unlink', path));

    watcher.on('error', (error) => {
      console.error(`Error watching directory ${dir}:`, error);
    });
    console.log(`Watching: ${dir}`);
  }

  private async handleFsEvent(
    eventType: string,
    fullPath: string
  ): Promise<void> {
    console.log(`FS event - ${eventType.padEnd(8, ' ')} - ${fullPath}`);
    let metadata;
    try {
      metadata = await ExifReader.load(fullPath);
    } catch {
      console.error(`Error loading metadata for ${fullPath}:`);
    }

    await this.fsEventProducer.publishEvent({
      type: eventType,
      path: fullPath,
      metadata: metadata,
    });
  }
}
