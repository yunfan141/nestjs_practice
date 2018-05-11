import { Module } from '@nestjs/common';
import {DemographicsModule} from './Demographics/demographics.module';
import {UsersModule} from './User/users.module';

@Module({
  imports: [
    DemographicsModule,
    UsersModule,
  ],
})
export class AppModule {}
