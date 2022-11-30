import internal from "stream";

export interface IClientRequest {

    fullName: string
    email: string
    phone: string

}

export interface IClientResponse extends IClientRequest {

    id: string
    createdAt: string

}

export interface IContactRequest {

    fullName: string
    email: string
    phone: string

}

export interface IContactResponse extends IContactRequest {

    id: string

}