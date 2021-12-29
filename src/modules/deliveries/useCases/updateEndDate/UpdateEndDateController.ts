import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(req: Request, res: Response) {
    const { idDeliveryman } = req;
    const { id } = req.params;

    const updateEndDateUseCase = new UpdateEndDateUseCase();

    const delivery = await updateEndDateUseCase.execute({
      idDelivery: id,
      idDeliveryman,
    });

    return res.json(delivery);
  }
}