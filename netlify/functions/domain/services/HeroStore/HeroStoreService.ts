import { TourOfHeroesLowDB } from "../../infrastructure/TourOfHeroesLowDB/TourOfHeroesLowDB";
import { HeroStorer } from "../../interfaces/HeroStorer";
import { Hero } from "../../models/Hero/Hero";

export class HeroStoreService implements HeroStorer {
  constructor(public hldb: TourOfHeroesLowDB) {}

  public listHeroes = (): Hero[] | string => {
    const db = this.hldb.initialHeroDB();
    db.read();
    const { heroes } = db.data;
    return heroes;
  };

  public createHero = (hero: Hero): Hero | string => {
    const db = this.hldb.initialHeroDB();
    db.data.heroes.push(hero);
    db.write();

    return hero;
  };

  public editHero = (id: string, hero: Hero): Hero | string => {
    const db = this.hldb.initialHeroDB();
    db.read();

    let heroIndex = db.data.heroes.findIndex((h) => h.id === id);
    db.data.heroes[heroIndex] = hero
    db.write()

    return hero;
  };
}
