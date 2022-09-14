import { Test, TestingModule } from '@nestjs/testing';
import { PruefungsplanService } from './pruefungsplan.service';

describe('PruefungsplanService', () => {
  let service: PruefungsplanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PruefungsplanService],
    }).compile();

    service = module.get<PruefungsplanService>(PruefungsplanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
