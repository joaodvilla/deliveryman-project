import { prisma } from "../../../../database/prismaClient";


export class FindAllDeliveriesUseCase {
  async execute(idClient: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: idClient,
      },
      select: {
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