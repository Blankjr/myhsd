import { Module } from '@nestjs/common';
import { PruefungsplanController } from './controllers/pruefungsplan/pruefungsplan.controller';
import { PruefungsplanService } from './services/pruefungsplan/pruefungsplan.service';

@Module({
  controllers: [PruefungsplanController],
  providers: [PruefungsplanService],
})
export class PruefungsplanModule {}
