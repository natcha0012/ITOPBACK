import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUserlist(): UserEntity[] {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string): UserEntity {
        return this.userService.findById(Number(id));
    }

    @Delete(':id')
    deleteUserById(@Param('id') id: string): void {
        this.userService.deleteById(Number(id));
    }
}
