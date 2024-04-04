import { Controller, Param, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/routes/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPlain(): string {
    console.log('Hello world! No params sent.');
    return this.appService.getHello();
  }

  @Get(':hyphen-param')
  paramFails(@Param('hyphen-param') param: number): string {
    console.log(`Hello world! Parameter: ${param}`)
    return this.appService.getHello();
  }

  @Get('dummy/:nohyphenparam')
  paramSucceeds(@Param('nohyphenparam') param: number): string {
    console.log(`Hello world! Param: ${param}`)
    return this.appService.getHello();
  }
}
