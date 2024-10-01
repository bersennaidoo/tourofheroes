import { Villain } from "../models/Villain/Villain"

export interface VillainStorer {
    listVillains: () =>  Villain[] | string
}