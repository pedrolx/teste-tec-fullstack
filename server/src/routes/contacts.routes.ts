import { Router } from "express";
import { createContactController } from "../controllers/contacts/contacts.controllers";

export const contactsRoutes = Router()

contactsRoutes.post('', createContactController);