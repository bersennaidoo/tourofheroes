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

    public resetHeroes = (): Hero[] | string => {

        const rheroes = this.heroStoreSrv.resetHeroes()

        return rheroes
    }

    public deleteHero = (id: string): Hero | string => {

        const result = this.heroStoreSrv.deleteHero(id)

        return result
    }

    public getHeroById = (id: string): Hero | undefined => {

        const hero = this.heroStoreSrv.getHeroById(id)

        if (hero === undefined) {
            return undefined
        }

        return hero
    }
}