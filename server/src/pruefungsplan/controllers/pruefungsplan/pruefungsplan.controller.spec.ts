import { Test, TestingModule } from '@nestjs/testing';
import { PruefungsplanController } from './pruefungsplan.controller';
import { PruefungsplanService } from './../../services/pruefungsplan/pruefungsplan.service';

describe('PruefungsplanController', () => {
  let controller: PruefungsplanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PruefungsplanController],
      providers: [PruefungsplanService],
    }).compile();

    controller = module.get<PruefungsplanController>(PruefungsplanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
