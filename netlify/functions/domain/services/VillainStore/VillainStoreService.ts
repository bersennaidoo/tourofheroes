import { TourOfHeroesLowDB } from "../../infrastructure/TourOfHeroesLowDB/TourOfHeroesLowDB";
import { VillainStorer } from "../../interfaces/VillainStorer";
import { Villain } from "../../models/Villain/Villain"

export class VillainStoreService implements VillainStorer {


    constructor(public hldb: TourOfHeroesLowDB) {}

    public listVillains = (): Villain[] | string  => {
        const db = this.hldb.initialVillainDB()
        const { villains } =  db.data
        return villains 
    }
}