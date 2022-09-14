import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { MensaplanService } from '../../services/mensaplan/mensaplan.service';
import { MensaplanController } from './mensaplan.controller';
import { Axios } from 'axios';

describe('MensaplanController', () => {
  let controller: MensaplanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, Axios],
      controllers: [MensaplanController],
      providers: [MensaplanService],
    }).compile();

    controller = module.get<MensaplanController>(MensaplanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
