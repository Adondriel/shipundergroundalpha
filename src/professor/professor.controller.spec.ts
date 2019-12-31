import { Test, TestingModule } from '@nestjs/testing';
import { ProfessorController } from './professor.controller';

describe('Professor Controller', () => {
  let controller: ProfessorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessorController],
    }).compile();

    controller = module.get<ProfessorController>(ProfessorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
