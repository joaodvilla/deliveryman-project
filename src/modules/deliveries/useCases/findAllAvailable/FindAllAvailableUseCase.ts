import { prisma } from '../../../../database/prismaClient';

export class FindAllAvailableUseCase {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        endAt: null,
      },
    });

    return deliveries;
  }
}