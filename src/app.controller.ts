import { Controller, Get } from '@nestjs/common';
import { sample } from 'servers/sample';
import { Observable } from 'rxjs';
import { LogService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly logService: LogService) {}

  @Get()
  getHello(): Observable<sample.HelloReply> {
    // this.appService.getHello().forEach((val) => console.log(val));

    // return 'see logs!';
    return this.logService.getHello();
  }
}
