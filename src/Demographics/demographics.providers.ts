import {Connection} from 'typeorm';
import {DemographicsEntity} from './Demographics.entity';

export const DemographicsProvider = {
    provide: 'DemographicsRepository',
    useFactory: (connection: Connection) => connection.getRepository(DemographicsEntity),
    inject: ['TypeORMInstance'],
};