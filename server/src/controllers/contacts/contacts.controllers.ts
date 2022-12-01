import { Request, Response } from "express";
import { createContactService } from "../../services/contacts/contacts.services";

export const createContactController = async (req: Request, res: Response) => {
    const { fullName, email, phone, clientName } = req.body;

        const contact = await createContactService({ fullName, email, phone }, clientName );

    return res.status(201).json(contact);
}