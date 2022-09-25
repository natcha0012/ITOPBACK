import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { APIService } from 'src/helper/helper';

@Injectable()
export class UserService {
    constructor(private readonly apiService: APIService) {
        // @InjectRepository (UserEntity)
        // private userRepository: Repository<UserEntity>
    }

    findAll(): UserEntity[] {
        return this.apiService.findAll()
    }

    findById(id: number): UserEntity {
        return this.apiService.findById(id)
    }

    deleteById(id: number): void {
        this.apiService.deleteById(id);
    }
}
