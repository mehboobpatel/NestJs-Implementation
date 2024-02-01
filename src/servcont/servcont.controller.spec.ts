import { Test, TestingModule } from '@nestjs/testing';
import { ServcontController } from './servcont.controller';

describe('ServcontController', () => {
  let controller: ServcontController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServcontController],
    }).compile();

    controller = module.get<ServcontController>(ServcontController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
