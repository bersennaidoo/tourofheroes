import { HeroStoreService } from "../../services/HeroStore/HeroStoreService";
import { Hero } from "./Hero";

export class HeroModel {

    constructor(public heroStoreSrv: HeroStoreService) {}

    public listHeroes = () => {

        const heroes = this.heroStoreSrv.listHeroes()

        return heroes
    }

    public createHero = (hero: Hero): Hero | string => {

        const chero = this.heroStoreSrv.createHero(hero)

        return chero
    }

    public editHero = (id: string, hero: Hero): Hero | string => {

        const eheroe = this.heroStoreSrv.editHero(id, hero)

        return eheroe
    }
}