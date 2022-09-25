import { Injectable } from '@nestjs/common';
import * as fileSystem from 'fs';
import { UserEntity } from 'src/user/entity/user.entity';

@Injectable()
export class APIService {
    private users: UserEntity[];
    constructor() {
        const file = fileSystem.readFileSync('src/mock-db/user.json');
        this.users = JSON.parse(file.toString());
    }
    public findAll(): UserEntity[] {
        return this.users
    }

    public findById(id: number): UserEntity {
        return this.users.find(user => user.id === id)
    }

    public deleteById(id: number): void {
        this.users = this.users.filter(user => user.id !== id)
        fileSystem.writeFile('src/mock-db/user.json', JSON.stringify(this.users), (err) => {
            if (err) console.error(err)
        })
    }
}
