import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { join, resolve } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.html')
  root(@Res() res): Promise<object> {
    return res.sendFile(resolve(__dirname, '../client/dist/client'));
  }
}
