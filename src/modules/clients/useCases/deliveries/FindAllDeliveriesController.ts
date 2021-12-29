import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";


export class FindAllDeliveriesController {
  async handle(req: Request, res: Response) {
    const { idClient } = req;
    const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
    const deliveries = await findAllDeliveriesUseCase.execute(idClient);

    return res.json(deliveries);
  }
}