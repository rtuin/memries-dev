import { Test, TestingModule } from '@nestjs/testing';
import { FsWatcherService } from './fs-watcher.service';

describe('FsWatcherService', () => {
  let service: FsWatcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsWatcherService],
    }).compile();

    service = module.get<FsWatcherService>(FsWatcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
