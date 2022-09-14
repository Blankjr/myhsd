import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MensaplanController } from './controllers/mensaplan/mensaplan.controller';
import { MensaplanService } from './services/mensaplan/mensaplan.service';

@Module({
  imports: [HttpModule],
  controllers: [MensaplanController],
  providers: [MensaplanService],
})
export class MensaplanModule {}
