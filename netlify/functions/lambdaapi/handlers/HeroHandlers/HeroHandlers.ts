import { Request, Response } from "express";
import { HeroModel } from "../../../domain/models/Hero/HeroModel";
import { Hero } from "../../../domain/models/Hero/Hero";

export class HeroHandlers {
  constructor(public heroModel: HeroModel) {}

  public listHeroes = async (req: Request, res: Response) => {
    const heroes = this.heroModel.listHeroes();

    try {
      res.status(200).json(heroes);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

  public createHero = async (req: Request, res: Response) => {
    const hero = this.heroModel.createHero(req.body);

    try {
      res.status(201).json({
        message: "created OK",
        reqBody: hero,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

  public editHero = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const hero = this.heroModel.editHero(id as string, body as Hero);
    try {
      res.status(200).json(hero);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

  public resetHeroes = async (req: Request, res: Response) => {
    const heroes = this.heroModel.resetHeroes();
    try {
      res.status(200).json(heroes);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

  public deleteHero = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = this.heroModel.deleteHero(id);
    try {
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        message: "Not Found!",
      });
    }
  };

  public getHeroById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const hero = this.heroModel.getHeroById(id);
    if (hero === undefined) {
      res.sendStatus(404)
    }
    res.status(200).json(hero);
  };
}
