import { Column, PrimaryGeneratedColumn } from "typeorm";

export class UserEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    country: string;

    @Column()
    canEdit: boolean;

    @Column()
    canDelete: boolean;

    @Column()
    citizenid?: string;

    @Column()
    phoneNumber?: string;

    @Column()
    address?: string;

    @Column()
    career?: string;

    @Column()
    salary?: string;
}
