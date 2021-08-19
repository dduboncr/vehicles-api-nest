import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleController } from './vehicle/vehicle.controller';
import { databaseProviders } from './database';

@Module({
  imports: [],
  controllers: [AppController, VehicleController],
  providers: [AppService, VehicleService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
