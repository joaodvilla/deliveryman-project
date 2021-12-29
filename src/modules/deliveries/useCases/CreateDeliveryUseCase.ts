import { prisma } from '../../../database/prismaClient';

interface ICreateDelivery {
  itemName: string;
  idClient: string;
}

export class CreateDeliveryUseCase {
  async execute({itemName, idClient}: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        itemName,
        idClient,
      }
    });

    return delivery;
  }
}