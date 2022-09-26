import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { APIService } from 'src/helper/helper';

@Injectable()
export class UserService {
    constructor(private readonly apiService: APIService) {
        // @InjectRepository (UserEntity)
        // private userRepository: Repository<UserEntity>
    }

    create(user: UserEntity): void {
        this.apiService.create(user)
    }

    findAll(options): UserEntity[] | { items: UserEntity[], total: number } {
        return this.apiService.findAll(options)
    }

    findById(id: number): UserEntity {
        return this.apiService.findById(id)
    }

    update(id: number, body: Partial<UserEntity>) {
        return this.apiService.update(id, body)
    }

    deleteById(id: number): void {
        this.apiService.deleteById(id);
    }
}
