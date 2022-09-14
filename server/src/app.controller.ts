import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/docs')
  getWiki() {
    return this.appService.getDocs();
  }
  @Get('/')
  getWelcome() {
    return this.appService.getWelcome();
  }
}
