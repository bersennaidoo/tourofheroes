import { Hero } from "../../models/Hero/Hero"
import axios from "axios"

export class HeroApiService {
    // list heroes
    public listHeroes = async (route: string) => {

        const promise1 = await axios.get(route)

        const  response  = await promise1

        return response
    }

    // add a hero
    public addHero = (route: string, hero: Hero) => {
        // call with axios

        // return hero successfully add
    }

    // update a hero
    public updateHero = (route: string, hero: Hero) => {
        // call with axios

        // return hero updated
    }

    public getHeroById = (route: string) => {
        //call with axios

        // return hero
    }

    // delete a hero
    public deleteHero = (route: string) => {
        // call with axios

        // return hero successfully deleted
    }
}