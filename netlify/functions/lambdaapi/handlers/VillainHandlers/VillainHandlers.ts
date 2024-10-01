import { Request, Response } from "express";
import { VillainModel } from "../../../domain/models/Villain/VillainModel";

export class VillainHandlers {

  constructor(public villainModel: VillainModel) {}

  public listVillains = (req: Request, res: Response) => {

    const villains = this.villainModel.listVillains()

    res.json(villains)
  }
}
