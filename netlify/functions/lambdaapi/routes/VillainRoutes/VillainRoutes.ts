import { Router } from "express"
import { VillainHandlers } from "../../handlers/VillainHandlers/VillainHandlers"

export class VillainRoutes {

    router: Router
    vhandler: VillainHandlers

    constructor(router: Router, vhandler: VillainHandlers) {
        this.router = router
        this.vhandler = vhandler

         this.router.route("/")
          .get(this.vhandler.listVillains)
    }
}