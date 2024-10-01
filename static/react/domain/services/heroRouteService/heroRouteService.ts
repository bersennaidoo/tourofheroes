export class HeroRouteService {
    // create routes for heroes

    public listHero = "/api/heroes"
    public addHero = "/api/heroes"
    public getHeroById = `/api/heroes`
    public updateHero = `/api/heroes`
    public deleteHero = `/api/heroes`

    public getDeleteHeroRoute = (id: string) => {
        return this.deleteHero + `/${id}`
    }
    public getUpdateHeroRoute = (id: string) => {
        return this.updateHero
    }

    public getHeroByIdRoute = (id: string) => {
        return this.getHeroById + `/${id}`
    }

    public getAddHeroRoute = () => {
        return this.addHero
    }

    public getListHeroRoute = () => {

        return this.listHero
    }
}