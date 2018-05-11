import {Module} from '@nestjs/common';
import { DatabaseModule } from '../Database/database.module';
import { UsersProvider } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [DatabaseModule],
    components: [
        UsersProvider,
        UsersService,
    ],
    controllers: [UsersController],
})

export class UsersModule{}