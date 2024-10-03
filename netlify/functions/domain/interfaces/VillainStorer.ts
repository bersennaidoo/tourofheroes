import { Villain } from "../models/Villain/Villain"

export interface VillainStorer {
    listVillains: () =>  Villain[] | string
    createVillain: (villain: Villain) => Villain | string
    editVillain: (id: string, villain: Villain) => Villain | string
    deleteVillain: (id: string) => Villain | string
    resetVillains: () => Villain[] | string
}