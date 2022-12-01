import { Router } from "express";
import { createClientController, getAllClientsController, getOneClientController } from "../controllers/clients/clients.controllers";

export const clientsRoutes = Router()

clientsRoutes.post('', createClientController);
clientsRoutes.get('/:clientName', getOneClientController)
clientsRoutes.get('', getAllClientsController)