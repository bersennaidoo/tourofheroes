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

    public listHeroes = () => {
        const listHeroRoute = this.heroRouteSrv.getListHeroRoute()
        const heroList = this.heroApiSrv.listHeroes(listHeroRoute)
        return heroList
    }

    // add a hero
    public addHero = (hero: Hero) => {
        const addHeroRoute = this.heroRouteSrv.getAddHeroRoute()
        const heroAdded = this.heroApiSrv.addHero(addHeroRoute, hero)

        return heroAdded
    }

    // update a hero
    public updateHero = (id: string, hero: Hero) => {
        const updateHeroRoute = this.heroRouteSrv.getUpdateHeroRoute(id)
        const heroUpdate = this.heroApiSrv.updateHero(updateHeroRoute, hero)
        return heroUpdate
    }

    public getHeroById = (id: string) => {
        const singleHeroRoute = this.heroRouteSrv.getHeroByIdRoute(id)
        const getHero = this.heroApiSrv.getHeroById(singleHeroRoute)

        return getHero
    }

    // delete a hero
    public deleteHero = (id: string) => {
        const deleteHeroRoute = this.heroRouteSrv.getDeleteHeroRoute(id)
        const deletedHero = this.heroApiSrv.deleteHero(deleteHeroRoute)

        return deletedHero
    }
}