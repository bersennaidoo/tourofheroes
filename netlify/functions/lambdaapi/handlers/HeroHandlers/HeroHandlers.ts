import { Request, Response } from "express";
import { HeroModel } from "../../../domain/models/Hero/HeroModel";

export class HeroHandlers {

  constructor(public heroModel: HeroModel) {}

  public listHeroes = (req: Request, res: Response) => {

    const heroes = this.heroModel.listHeroes()

    res.json(heroes)
  }
}
