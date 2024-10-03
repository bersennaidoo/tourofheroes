import { Router } from "express";
import { OrderRoutes } from "./routes/orderRoutes/orderRoutes";
import { ItemsRoutes } from "./routes/itemsRoutes/itemsRoutes";
import { HeroRoutes } from "./routes/HeroRoutes/HeroRoutes";
import { VillainRoutes } from "./routes/VillainRoutes/VillainRoutes";

export class Index {
    public heroRoute: HeroRoutes
    public villainRoute: VillainRoutes
    public router: Router

    constructor(heroRoute: HeroRoutes, villainRoute: VillainRoutes, router: Router) {
        this.heroRoute = heroRoute
        this.villainRoute = villainRoute
        this.router = router

        this.router.use("/heroes", this.heroRoute.router)
        this.router.use("/h/reset", this.heroRoute.router)
        this.router.use("/villains", this.villainRoute.router)
        this.router.use("/v/reset", this.villainRoute.router)

    }
}