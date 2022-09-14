import { Controller, Get } from '@nestjs/common';
import { PruefungsplanService } from './../../services/pruefungsplan/pruefungsplan.service';

export interface Pruefung {
  Datum: string;
  Tag: string;
  'Studieng.': string;
  Code: string;
  Fachname: string;
  '1.PrüferIn': string;
  '2.PrüferIn': string;
  Raum: string;
  Dauer: string;
  Beginn: string;
  Titel: string;
}
@Controller('pruefungsplan')
export class PruefungsplanController {
  folderLocation: string = process.cwd() + '/public/pruefungsplan/';
  CSV: string = this.folderLocation + 'pruefungsplan.csv';
  JSON: string = this.folderLocation + 'pruefungsplan.json';

  jsonData: Array<Pruefung>;

  onModuleInit() {
    this.PruefungsplanService.loadData(this.JSON, this.CSV);
  }
  constructor(private readonly PruefungsplanService: PruefungsplanService) {}

  @Get('/all')
  getData() {
    return this.jsonData
      ? this.jsonData
      : this.PruefungsplanService.getData(this.JSON);
  }
}
