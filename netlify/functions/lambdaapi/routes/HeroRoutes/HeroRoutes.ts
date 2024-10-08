import { Router } from "express";
import { HeroHandlers } from "../../handlers/HeroHandlers/HeroHandlers";

export class HeroRoutes {
  router: Router;
  hhandler: HeroHandlers;

  constructor(router: Router, hhandler: HeroHandlers) {
    this.router = router;
    this.hhandler = hhandler;

    this.router
      .route("/")
      .get(this.hhandler.listHeroes)
      .post(this.hhandler.createHero);
      

    this.router.route("/:id").post(this.hhandler.editHero);
    this.router.route("/:id").get(this.hhandler.getHeroById);
    this.router.route("/:id").delete(this.hhandler.deleteHero);
    this.router.route("/").delete(this.hhandler.resetHeroes);
  }
}
