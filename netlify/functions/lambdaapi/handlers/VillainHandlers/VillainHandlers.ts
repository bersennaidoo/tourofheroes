import { Request, Response } from "express";
import { VillainModel } from "../../../domain/models/Villain/VillainModel";
import { Villain } from "../../../domain/models/Villain/Villain";

export class VillainHandlers {

  constructor(public villainModel: VillainModel) {}

  public listVillains = async (req: Request, res: Response) => {
    const villains = this.villainModel.listVillains();

    try {
      res.status(200).json(villains);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

  public createVillain = async (req: Request, res: Response) => {
    const villain = this.villainModel.createVillain(req.body);

    try {
      res.status(201).json({
        message: "created OK",
        reqBody: villain,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

  public editVillain = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const villain = this.villainModel.editVillain(id as string, body as Villain);
    try {
      res.status(200).json(villain);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

  public resetVillains = async (req: Request, res: Response) => {
    const villains = this.villainModel.resetVillains();
    try {
      res.status(200).json(villains);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

   public deleteVillain = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = this.villainModel.deleteVillain(id);
    try {
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

}
