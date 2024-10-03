import { Villains } from "./Villains";
import { Data } from "./Data";
import { JSONFileSyncPreset } from "lowdb/node";

export class TourOfHeroesLowDB {
  defaultData: Data;
  defaultVillain: Villains;

  public initialHeroDB = () => {
    this.defaultData = {
      heroes: [
      ],
    };
    const db = JSONFileSyncPreset<Data>("db.json", this.defaultData);

    return db;
  };

  public initialVillainDB = () => {
    this.defaultVillain = {
      villains: [
      ],
    };
    const db = JSONFileSyncPreset<Villains>("villains.json", this.defaultVillain);

    return db;
  };
}
