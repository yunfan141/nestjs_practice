import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    user_pin: string;

    @Column()
    age: number;

}