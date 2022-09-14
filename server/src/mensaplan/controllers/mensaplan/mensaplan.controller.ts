import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  OnModuleInit,
  Param,
} from '@nestjs/common';
import { MensaplanService } from '../../services/mensaplan/mensaplan.service';
import { Cron } from '@nestjs/schedule';

@Controller('mensaplan')
export class MensaplanController implements OnModuleInit {
  onModuleInit() {
    this.updateFood();
  }
  XML_URL =
    'https://medien.hs-duesseldorf.de/service/mensaplan/Documents/app_all.xml';
  DOWNLOAD_LOCATION: string = process.cwd() + '/public/data';
  constructor(private mensaplanService: MensaplanService) {}

  @Get('find/:id')
  getMensaplanById(@Param('id') id: string) {
    const food = this.mensaplanService.findFoodById(
      this.DOWNLOAD_LOCATION + '/app_all.xml',
      id,
    );
    if (food) return food;
    else throw new HttpException('Food Not Found!', HttpStatus.BAD_REQUEST);
  }
  @Cron('0 4,6,8,10 * * 1-5') // Every Monday-Friday at 4:00,  6:00, 8:00AM, 10:00AM
  updateFood() {
    return this.mensaplanService.updateFood(
      this.XML_URL,
      this.DOWNLOAD_LOCATION,
    );
  }
  @Get('update')
  updateFoodManual() {
    return this.mensaplanService.updateFood(
      this.XML_URL,
      this.DOWNLOAD_LOCATION,
    );
  }
  @Get('all')
  async getFood() {
    return this.mensaplanService.getFood(
      this.DOWNLOAD_LOCATION + '/app_all.xml',
    );
  }
  @Get('today')
  async getFoodToday() {
    return this.mensaplanService.getFoodToday(
      this.DOWNLOAD_LOCATION + '/app_all.xml',
    );
  }
  @Get('weekday/:weekday')
  async getFoodWeekday(@Param('weekday') weekday: string) {
    return this.mensaplanService.getFoodWeekday(
      this.DOWNLOAD_LOCATION + '/app_all.xml',
      weekday,
    );
  }
}
