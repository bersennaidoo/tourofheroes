import { HeroStoreService } from "../../services/HeroStore/HeroStoreService";
import { Hero } from "./Hero";

export class HeroModel {

    constructor(public heroStoreSrv: HeroStoreService) {}

    public listHeroes = () => {

        const heroes = this.heroStoreSrv.listHeroes()

        return heroes
    }
}