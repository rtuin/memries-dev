import { Test, TestingModule } from '@nestjs/testing';
import { EtcdRepository } from './etcd.repository';

describe('EtcdRepositoryService', () => {
  let service: EtcdRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtcdRepository],
    }).compile();

    service = module.get<EtcdRepository>(EtcdRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
