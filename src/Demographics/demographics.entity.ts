import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class DemographicsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    gender: string;

    @Column()
    birthday: string;

    @Column()
    email: string;

    @Column()
    phone: string;
}