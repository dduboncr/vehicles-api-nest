import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TestserviceService } from './testservice/testservice.service';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleController } from './vehicle/vehicle.controller';

@Module({
  imports: [],
  controllers: [AppController, TestController, VehicleController],
  providers: [AppService, TestserviceService, VehicleService],
})
export class AppModule {}
