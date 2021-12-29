import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(req: Request, res: Response) {
    const { idDeliveryman } = req;
    const { id } = req.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const delivery = await updateDeliverymanUseCase.execute({
      idDelivery: id,
      idDeliveryman,
    });

    return res.json(delivery);
  }
}