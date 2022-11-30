import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Client } from "./client.entity";


@Entity("Contact")
export class Contact {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({nullable: false})
    fullName: string

    @Column({nullable: false})
    email: string

    @Column({nullable: false})
    phone: string

    @ManyToOne(() => Client, { eager: true })
    client: Client;

}