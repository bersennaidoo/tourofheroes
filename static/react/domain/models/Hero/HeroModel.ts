import { HookService } from "../../services/hookService/hookService"
import { HeroApiService } from "../../services/heroApiService/heroApiService"
import { HeroRouteService } from "../../services/heroRouteService/heroRouteService"
import { Hero } from "./Hero"

export class HeroModel {
    // react depends on HeroModel
    // HeroModel depends on heroApiService, heroRouteService hookService
    public heroApiSrv: HeroApiService
    public heroRouteSrv: HeroRouteService
    public hookSrv: HookService

    constructor(heroApiSrv: HeroApiService, heroRouteSrv: HeroRouteService, hookSrv: HookService) {
        this.heroApiSrv = heroApiSrv
        this.heroRouteSrv = heroRouteSrv
        this.hookSrv = hookSrv
    }

    /*public listHeroes = () => {
        const listHeroRoute = this.heroRouteSrv.getListHeroRoute()
        const response = this.heroApiSrv.listHeroes(listHeroRoute)
        return response
    }*/
    
    public listHeroes = () => {
        const listHeroRoute = this.heroRouteSrv.getListHeroRoute()
        const data = this.hookSrv.useGetHeroes(listHeroRoute)
        return data
    }


    // add a hero
    public addHero = () => {
        const addHeroRoute = this.heroRouteSrv.getAddHeroRoute()
        return this.hookSrv.usePostHero(addHeroRoute)
    }

    // update a hero
    public updateHero = (id: string) => {
        const updateHeroRoute = this.heroRouteSrv.getUpdateHeroRoute(id)
        const heroState = this.hookSrv.usePostHero(updateHeroRoute)
        return heroState
    }

    public getHeroById = (id: string) => {
        const singleHeroRoute = this.heroRouteSrv.getHeroByIdRoute(id)
        const getHero = this.heroApiSrv.getHeroById(singleHeroRoute)

        return getHero
    }

    // delete a hero
    public deleteHero = (id: string) => {
        const deleteHeroRoute = this.heroRouteSrv.getDeleteHeroRoute(id)
        const deletedHero = this.hookSrv.useDeleteHero(deleteHeroRoute)

        return deletedHero
    }
}