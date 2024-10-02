import { Test, TestingModule } from '@nestjs/testing';
import { FileLocationConfigService } from './file-location-config.service';

describe('FileLocationConfigService', () => {
  let service: FileLocationConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileLocationConfigService],
    }).compile();

    service = module.get<FileLocationConfigService>(FileLocationConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
