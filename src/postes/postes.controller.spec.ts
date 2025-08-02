import { Test, TestingModule } from '@nestjs/testing';
import { PostesController } from './postes.controller';

describe('PostesController', () => {
  let controller: PostesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostesController],
    }).compile();

    controller = module.get<PostesController>(PostesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
