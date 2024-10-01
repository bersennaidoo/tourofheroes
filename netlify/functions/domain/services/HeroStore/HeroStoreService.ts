import { TourOfHeroesLowDB } from "../../infrastructure/TourOfHeroesLowDB/TourOfHeroesLowDB";
import { HeroStorer } from "../../interfaces/HeroStorer";
import { Hero } from "../../models/Hero/Hero"

export class HeroStoreService implements HeroStorer {


    constructor(public hldb: TourOfHeroesLowDB) {}

    public listHeroes = (): Hero[] | string  => {
        const db = this.hldb.initialHeroDB()
        const { heroes } =  db.data
        return heroes 
    }
}