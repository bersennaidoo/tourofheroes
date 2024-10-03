import { Villain } from "./Villain";
import { VillainStoreService } from "../../services/VillainStore/VillainStoreService";

export class VillainModel {

    constructor(public villainStoreSrv: VillainStoreService) {}

    public listVillains = () => {

        const villains = this.villainStoreSrv.listVillains()

        return villains
    }

    public createVillain = (villain: Villain): Villain | string => {

        const cvillain = this.villainStoreSrv.createVillain(villain)

        return cvillain
    }

    public editVillain = (id: string, villain: Villain): Villain | string => {

        const evillain = this.villainStoreSrv.editVillain(id, villain)

        return evillain
    }

    public deleteVillain = (id: string): Villain | string => {

        const result = this.villainStoreSrv.deleteVillain(id)

        return result
    }

    public resetVillains = (): Villain[] | string => {

        const rvillains = this.villainStoreSrv.resetVillains()

        return rvillains
    }
}