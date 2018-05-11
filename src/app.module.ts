import { Module } from '@nestjs/common';
import {DemographicsModule} from './Demographics/demographics.module';

@Module({
  imports: [
    DemographicsModule,
  ],
})
export class AppModule {}
