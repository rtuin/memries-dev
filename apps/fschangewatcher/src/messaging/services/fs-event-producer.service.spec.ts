import { Test, TestingModule } from '@nestjs/testing';
import { FsEventProducerService } from './fs-event-producer.service';

describe('FsEventProducerService', () => {
  let service: FsEventProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FsEventProducerService],
    }).compile();

    service = module.get<FsEventProducerService>(FsEventProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
