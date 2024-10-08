import { Villains } from "./Villains";
import { Data } from "./Data";
import { JSONFileSyncPreset } from "lowdb/node";
import { Boys } from "./Boys";

export class TourOfHeroesLowDB {
  defaultData: Data;
  defaultVillain: Villains;
  defaultBoy: Boys

  public initialHeroDB = () => {
    this.defaultData = {
      heroes: [
      ],
    };
    const db = JSONFileSyncPreset<Data>("/tmp/db.json", this.defaultData);

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

   public initialBoyDB = () => {
    this.defaultBoy = {
      boys: [
      ],
    };
    const db = JSONFileSyncPreset<Boys>("boys.json", this.defaultBoy);

    return db;
  };

}
