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
    db.read()
    hero.id = hero.name
    db.data.heroes.push(hero);
    db.write();

    return hero;
  };

  public editHero = (id: string, hero: Hero): Hero | string => {
    const db = this.hldb.initialHeroDB();
    db.read();

    let heroIndex = db.data.heroes.findIndex((h) => h.id === id);
    hero.id = id
    db.data.heroes[heroIndex] = hero
    db.write()

    return hero;
  };

  public deleteHero = (id: string): Hero | string => {
    let db = this.hldb.initialHeroDB();
    db.read();

    db.data.heroes.forEach((h, i) => {
      if (h.id === id) {
        delete db.data.heroes[i];
        const newHeroes = db.data.heroes.filter((v) => v !== null)
        db.data.heroes = newHeroes
        db.write()
      }
    });

    return "hero deleted";
  };

   public resetHeroes = (): Hero[] | string => {
    const db = this.hldb.initialHeroDB();
    db.read();

    db.data.heroes = []

    db.write()

    return db.data.heroes;
  };

  public getHeroById = (id: string): Hero | undefined => {

    const db = this.hldb.initialHeroDB()
    db.read()

    const hero = db.data.heroes.find((h) => h.id === id)

    if (hero === undefined) {
      return undefined
    }

    return hero as Hero
  }

}
