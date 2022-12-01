import "reflect-metadata";
import "express-async-errors";
import express from 'express'
import { handleErrorMiddleware } from './middlewares/handleErrors.middlewares';
import { clientsRoutes } from './routes/clients.routes';
import { contactsRoutes } from './routes/contacts.routes';

const app = express();
app.use(express.json());

app.use('/clients', clientsRoutes)
app.use('/contacts', contactsRoutes)
app.use(handleErrorMiddleware);

export default app;