import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'TypeORMInstance',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'zyf1994',
            database: 'mytest',
            entities: [
                __dirname + '/../*/*.entity{.ts,.js}',
                'src/Demographics/Demographics.entity.ts',
                'src/User/Users.entity.ts',
            ],
            logging: true,
            synchronize: true,
        }),
    },
];
