import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClientRequest, IClientResponse } from "../../interfaces/index";
import { AppError } from "../../errors/appErrors.errors";

export const createClientService = async ({
    fullName,
    email,
    phone
}: IClientRequest): Promise<IClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientAlreadyExists = await clientRepository.findOne({
    where: { email: email },
  });

  if (clientAlreadyExists) {
    throw new AppError("This e-mail is already being used.");
  }

  const client = clientRepository.create({
    fullName,
    email,
    phone
  });

  await clientRepository.save(client);
  

  return client;
};

export const getOneClientService = async (
  clientName: string
): Promise<IClientResponse> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: { fullName: clientName },
  });

  if(!client){
    throw new AppError("Client with this name not found", 404)
  }

  return client;
};

export const getAllClientsService = async (): Promise<IClientResponse[]> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  return clients;
};