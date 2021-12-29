import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";


export class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { itemName } = req.body;
    const { idClient } = req;
    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      itemName,
      idClient,
    });

    return res.status(201).json(delivery);
  };
}