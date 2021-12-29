import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";


export class FindAllDeliveriesDeliverymanController {
  async handle(req: Request, res: Response) {
    const { idDeliveryman } = req;
    const findAllDeliveriesUseCase = new FindAllDeliveriesDeliverymanUseCase();
    const deliveries = await findAllDeliveriesUseCase.execute(idDeliveryman);

    return res.json(deliveries);
  }
}