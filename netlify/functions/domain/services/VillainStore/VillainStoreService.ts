import { TourOfHeroesLowDB } from "../../infrastructure/TourOfHeroesLowDB/TourOfHeroesLowDB";
import { VillainStorer } from "../../interfaces/VillainStorer";
import { Villain } from "../../models/Villain/Villain";

export class VillainStoreService implements VillainStorer {
  constructor(public vldb: TourOfHeroesLowDB) {}

  public listVillains = (): Villain[] | string => {
    const db = this.vldb.initialVillainDB();
    db.read();
    const { villains } = db.data;

    return villains;
  };

  public createVillain = (villain: Villain): Villain | string => {
    const db = this.vldb.initialVillainDB();
    db.data.villains.push(villain);
    db.write();

    return villain;
  };

  public editVillain = (id: string, villain: Villain): Villain | string => {
    const db = this.vldb.initialVillainDB();
    db.read();

    let villainIndex = db.data.villains.findIndex((v) => v.id === id);
    db.data.villains[villainIndex] = villain;
    db.write();

    return villain;
  };

  public deleteVillain = (id: string): Villain | string => {
    let db = this.vldb.initialVillainDB();
    db.read();

    db.data.villains.forEach((v, i) => {
      if (v.id === id) {
        delete db.data.villains[i];
        const newVillains = db.data.villains.filter((v) => v !== null)
        db.data.villains = newVillains
        db.write()
      }
    });

    return "villain deleted";
  };

  public resetVillains = (): Villain[] | string => {
    const db = this.vldb.initialVillainDB();
    db.read();

    db.data.villains = [];

    db.write();

    return db.data.villains;
  };
}
