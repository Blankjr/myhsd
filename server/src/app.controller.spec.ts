import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should contain "Hello User"', () => {
      expect(appController.getWelcome()).toContain(`
<h1>Hello User</h1>
<h3>You might take a look at the docs</h3>
`);
    });
  });
  describe('root', () => {
    it('should contain "Mensaplan"', () => {
      expect(appController.getWiki()).toContain('Mensaplan');
    });
  });
});
