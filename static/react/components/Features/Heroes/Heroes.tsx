import React, { FC, useState, useEffect } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ListHeader from "../../blocks/ListHeader/list-header";
//import heroes from "../../../../../cypress/fixtures/heroes.json";
import { Hero } from "../../../domain/models/Hero/Hero";
import HeroList from "./HeroList";
import ModalYesNo from "../../blocks/ModalYesNo/modal-yes-no";
import HeroDetail from "./HeroDetail";
import { HeroRouteService } from "../../../domain/services/heroRouteService/heroRouteService";
import { HeroApiService } from "../../../domain/services/heroApiService/heroApiService";
import { HookService } from "../../../domain/services/hookService/hookService";
import { HeroModel } from "../../../domain/models/Hero/HeroModel";

interface IHeroesProps {
}

const Heroes: FC<IHeroesProps> = (props: IHeroesProps) => {
  const {} = props;

  // Create and Inject dependencies into HeroModel
  const heroRouterSrv = new HeroRouteService()
  const heroApiSrv = new HeroApiService()
  const hookSrv = new HookService()
  const heroModel = new HeroModel(heroApiSrv, heroRouterSrv, hookSrv)

  //const [heroes, setHeroes] = useState<Hero[]>([])
  const { heroes: heroes = [], status, getError, refetch } = heroModel.listHeroes()
  //const [heros, setHeros] = useState<Hero[]>([])
  const [showModal, setShowModal] = useState<boolean>(false);
  const [heroToDelete, setHeroToDelete] = useState<Hero | null>(null)
  const { deleteHero, isDeleteError } = heroModel.deleteHero(heroToDelete?.id!)
  const navigate = useNavigate()

  const handleRefresh = () => {
    navigate("/tourofheroes/heroes")
  }

  const addNewHero = () => {
    navigate("/tourofheroes/heroes/add-hero")
  };

  const handleCloseModal = () => {
    setShowModal(false)
  };

  const handleDeleteHero = (hero: Hero) => {
    setHeroToDelete(hero)
    setShowModal(true)
  }

  const handleDeleteFromModal = () => {
    //handleDeleteHero(heroToDelete!)
    heroToDelete ? deleteHero(heroToDelete) : null
    setShowModal(false)
    console.log("handleDeleteFromModal")
  }

  return (
    <div data-cy="heroes">
      <ListHeader
        title="Heroes"
        handleAdd={addNewHero}
        handleRefresh={handleRefresh}
      />
      <div>
        <div>
          <Routes>
            <Route 
               path=""
               element={<HeroList heroes={heroes} handleDeleteHero={handleDeleteHero} />}
            />
            <Route path="/add-hero" element={<HeroDetail refetch={refetch} />} />
            <Route path="/edit-hero/:id" element={<HeroDetail refetch={refetch} />} />
            <Route path="*" element={<HeroList heroes={heroes} handleDeleteHero={handleDeleteHero} />} />
          </Routes>
        </div>
      </div>
      {showModal && (
        <ModalYesNo
          message="Would you like to delete the hero?"
          onNo={handleCloseModal}
          onYes={handleDeleteFromModal}
        />
      )}
    </div>
  );
};

export default Heroes;
