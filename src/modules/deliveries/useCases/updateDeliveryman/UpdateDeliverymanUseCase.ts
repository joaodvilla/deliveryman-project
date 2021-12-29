import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  idDelivery: string;
  idDeliveryman: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ idDelivery, idDeliveryman }: IUpdateDeliveryman) {
    const delivery = await prisma.deliveries.update({
      where: {
        id: idDelivery,
      },
      data: {
        idDeliveryman
      }
    });
    return delivery;
  }
}