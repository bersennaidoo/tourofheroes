import { Villains } from "./Villains";
import { Data } from "./Data";
import { JSONFileSyncPreset } from "lowdb/node";

export class TourOfHeroesLowDB {
  defaultData: Data;
  defaultVillain: Villains;

  public initialHeroDB = () => {
    this.defaultData = {
      heroes: [
        {
          id: "HeroAslaug",
          name: "Aslaug",
          description: "warrior queen",
        },
        {
          id: "HeroBjorn",
          name: "Bjorn Ironside",
          description: "king of 9th century Sweden",
        },
        {
          id: "HeroIvar",
          name: "Ivar the Boneless",
          description: "commander of the Great Heathen Army",
        },
        {
          id: "HeroLagertha",
          name: "Lagertha the Shieldmaiden",
          description: "aka Hlaðgerðr",
        },
        {
          id: "HeroRagnar",
          name: "Ragnar Lothbrok",
          description: "aka Ragnar Sigurdsson",
        },
        {
          id: "HeroThora",
          name: "Thora Town-hart",
          description: "daughter of Earl Herrauðr of Götaland",
        },
      ],
    };
    const db = JSONFileSyncPreset<Data>("db.json", this.defaultData);

    return db;
  };

  public initialVillainDB = () => {
    this.defaultVillain = {
      villains: [
        {
          id: "HeroAslaug",
          name: "Aslaug",
          description: "warrior queen",
        },
        {
          id: "HeroBjorn",
          name: "Bjorn Ironside",
          description: "king of 9th century Sweden",
        },
        {
          id: "HeroIvar",
          name: "Ivar the Boneless",
          description: "commander of the Great Heathen Army",
        },
        {
          id: "HeroLagertha",
          name: "Lagertha the Shieldmaiden",
          description: "aka Hlaðgerðr",
        },
        {
          id: "HeroRagnar",
          name: "Ragnar Lothbrok",
          description: "aka Ragnar Sigurdsson",
        },
        {
          id: "HeroThora",
          name: "Thora Town-hart",
          description: "daughter of Earl Herrauðr of Götaland",
        },
      ],
    };
    const db = JSONFileSyncPreset<Villains>("villains.json", this.defaultVillain);

    return db;
  };
}
