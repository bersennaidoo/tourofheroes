import express, { Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import serverless from "serverless-http";
import { Index } from "./lambdaapi/index"
import { OrderHandlers } from "./lambdaapi/handlers/orderHandlers/orderHandlers";
import { OrderRoutes } from "./lambdaapi/routes/orderRoutes/orderRoutes";
import { ItemsHandlers } from "./lambdaapi/handlers/itemsHandlers/itemsHandlers";
import { ItemsRoutes } from "./lambdaapi/routes/itemsRoutes/itemsRoutes";
import { HeroRoutes } from "./lambdaapi/routes/HeroRoutes/HeroRoutes";
import { HeroHandlers } from "./lambdaapi/handlers/HeroHandlers/HeroHandlers";
import { HeroStoreService } from "./domain/services/HeroStore/HeroStoreService";
import { HeroModel } from "./domain/models/Hero/HeroModel";
import { TourOfHeroesLowDB } from "./domain/infrastructure/TourOfHeroesLowDB/TourOfHeroesLowDB";
import { VillainStoreService } from "./domain/services/VillainStore/VillainStoreService";
import { VillainModel } from "./domain/models/Villain/VillainModel";
import { VillainHandlers } from "./lambdaapi/handlers/VillainHandlers/VillainHandlers";
import { VillainRoutes } from "./lambdaapi/routes/VillainRoutes/VillainRoutes";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const tldb = new TourOfHeroesLowDB()
const hsSrv = new HeroStoreService(tldb)
const hModel = new HeroModel(hsSrv)
const hhandler = new HeroHandlers(hModel)
const vsSrv = new VillainStoreService(tldb)
const vModel = new VillainModel(vsSrv)
const vhandler = new VillainHandlers(vModel)
const hrouter = new HeroRoutes(Router(), hhandler)
const vrouter = new VillainRoutes(Router(), vhandler)

const irouter = new Index(hrouter, vrouter, Router())

app.use("/api/", irouter.router);

export const handler = serverless(app);