import { Injectable } from '@nestjs/common';
import { sample } from 'servers/sample';
import { Observable } from 'rxjs';
import { LogServer } from 'servers/log-server';

@Injectable()
export class LogService {
  getHello(): Observable<sample.HelloReply> {
    // Create a client connecting to the server
    const logServer = new LogServer('localhost:50051');
    // Get a client for the Greeter service
    const greeter = logServer.getGreeter();

    return greeter.sayHello({ name: 'world' });
  }
}
