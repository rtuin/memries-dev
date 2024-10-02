import { Test, TestingModule } from '@nestjs/testing';
import { BaseDirectoryConfigController } from './base-directory-config.controller';

describe('BaseDirectoryConfigController', () => {
  let controller: BaseDirectoryConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseDirectoryConfigController],
    }).compile();

    controller = module.get<BaseDirectoryConfigController>(
      BaseDirectoryConfigController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
