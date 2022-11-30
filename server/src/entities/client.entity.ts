import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";


@Entity("Client")
export class Client {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({nullable: false})
    fullName: string

    @Column({nullable: false})
    email: string

    @Column({nullable: false})
    phone: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=> Contact, contact => contact.client)
    contacts: Contact[]

}