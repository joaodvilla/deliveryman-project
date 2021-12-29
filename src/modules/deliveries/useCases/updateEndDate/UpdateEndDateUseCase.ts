import { prisma } from "../../../../database/prismaClient";

interface IUpdateEndDate {
  idDelivery: string;
  idDeliveryman: string;
}

export class UpdateEndDateUseCase {
  async execute({ idDelivery, idDeliveryman }: IUpdateEndDate) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: idDelivery,
        idDeliveryman
      },
      data: {
        endAt: new Date()
      }
    });
    return delivery;
  }
}