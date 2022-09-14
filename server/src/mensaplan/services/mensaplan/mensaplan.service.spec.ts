import { Test, TestingModule } from '@nestjs/testing';
import { MensaplanService } from './mensaplan.service';
import { HttpModule } from '@nestjs/axios';

describe('MensaplanService', () => {
  let service: MensaplanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensaplanService],
      imports: [HttpModule],
    }).compile();

    service = module.get<MensaplanService>(MensaplanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
