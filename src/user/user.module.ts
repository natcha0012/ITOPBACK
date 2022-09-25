import { Module } from '@nestjs/common';
import { APIService } from 'src/helper/helper';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
    // imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService, APIService],
})
export class UserModule { }
