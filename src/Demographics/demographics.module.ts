import {Module} from '@nestjs/common';
import { DatabaseModule } from '../Database/database.module';
import {DemographicsProvider} from './demographics.providers';
import {DemographicsService} from './demographics.service';
import {DemographicsController} from './demographics.controller';

@Module({
    imports: [DatabaseModule],
    components: [
        DemographicsProvider,
        DemographicsService,
    ],
    controllers: [
        DemographicsController,
    ],
})

export class DemographicsModule{}
