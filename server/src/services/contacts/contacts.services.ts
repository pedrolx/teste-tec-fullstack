import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClientRequest, IClientResponse, IContactRequest, IContactResponse } from "../../interfaces/index";
import { AppError } from "../../errors/appErrors.errors";
import { Contact } from "../../entities/contact.entity";

export const createContactService = async ({
    fullName,
    email,
    phone
}: IContactRequest, 
clientName: string
): Promise<IContactResponse> => {
    
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository = AppDataSource.getRepository(Contact);

  const client = await clientRepository.findOne({
    where: { fullName: clientName },
  });

  if (!client) {
    throw new AppError("Client with this name does not exists.");
  }

  const contact = contactRepository.create({
    fullName,
    email,
    phone,
    client: client
  });

  await contactRepository.save(contact);

  return contact;
};