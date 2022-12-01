import { Request, Response } from "express";
import { createClientService, getAllClientsService, getOneClientService } from "../../services/clients/clients.services";

export const createClientController = async (req: Request, res: Response) => {
    const { fullName, email, phone } = req.body;

    const client = await createClientService({ fullName, email, phone });

    return res.status(201).json(client);
}

export const getOneClientController = async (req: Request, res: Response) => {
    const { clientName } = req.params;

    const client = await getOneClientService(clientName);

    return res.status(200).json(client);
}

export const getAllClientsController = async (req: Request, res: Response) => {

    const client = await getAllClientsService();

    return res.status(200).json(client);
}