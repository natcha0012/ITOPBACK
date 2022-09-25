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

    private getNextId(): number {
        const lastUser = this.users[this.users.length - 1]
        return lastUser.id + 1;
    }

    public create(user: UserEntity): void {
        user.id = this.getNextId()
        this.users.push(user)
        fileSystem.writeFile('src/mock-db/user.json', JSON.stringify(this.users), (err) => {
            if (err) console.error(err)
        })
    }
    public findAll(): UserEntity[] {
        return this.users
    }

    public findById(id: number): UserEntity {
        return this.users.find(user => user.id === id)
    }

    public update(id: number, body: Partial<UserEntity>) {
        const keys = Object.keys(body);
        this.users.forEach(user => {
            if (user.id === id) {
                for (let key of keys) {
                    user[key] = body[key]
                }
            }
        })
    }

    public deleteById(id: number): void {
        this.users = this.users.filter(user => user.id !== id)
        fileSystem.writeFile('src/mock-db/user.json', JSON.stringify(this.users), (err) => {
            if (err) console.error(err)
        })
    }
}
