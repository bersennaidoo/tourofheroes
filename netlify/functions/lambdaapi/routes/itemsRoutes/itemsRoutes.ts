import { Router } from "express"
import { ItemsHandlers } from "../../handlers/itemsHandlers/itemsHandlers"

export class ItemsRoutes {

    router: Router
    ihandler: ItemsHandlers

    constructor(router: Router, ihandler: ItemsHandlers) {
        this.router = router
        this.ihandler = ihandler

         this.router.route("/")
          .get(this.ihandler.getItems)
    }
}