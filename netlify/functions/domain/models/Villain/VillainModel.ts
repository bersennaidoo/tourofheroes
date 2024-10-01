import { Villain } from "./Villain";
import { VillainStoreService } from "../../services/VillainStore/VillainStoreService";

export class VillainModel {

    constructor(public villainStoreSrv: VillainStoreService) {}

    public listVillains = () => {

        const villains = this.villainStoreSrv.listVillains()

        return villains
    }
}