import { prisma } from "../../../../database/prismaClient";


export class FindAllDeliveriesDeliverymanUseCase {
  async execute(idDeliveryman: string) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: idDeliveryman,
      },
      select: {
        id: true,
        username: true,
        deliveries: {
          include: {
            deliveryman: {
              select: {
                id: true,
                username: true,
              }
            }
          }
        },
      }
    });

    return deliveries;
  }
}