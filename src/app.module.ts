import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LogService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [LogService],
})
export class AppModule {}
