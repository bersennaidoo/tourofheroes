import React, { FC, useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ListHeader from "../../blocks/ListHeader/list-header";
import heroes from "../../../../../cypress/fixtures/heroes.json";
import HeroList from "./HeroList";
import ModalYesNo from "../../blocks/ModalYesNo/modal-yes-no";
import HeroDetail from "./HeroDetail";

interface IHeroesProps {
}

const Heroes: FC<IHeroesProps> = (props: IHeroesProps) => {
  const {} = props;

  const [showModal, setShowModal] = useState<boolean>(false);
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

  const handleDeleteHero = () => {
    setShowModal(true)
  }

  const handleDeleteFromModal = () => {
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
            <Route path="/add-hero" element={<HeroDetail hero={heroes[0]} />} />
            <Route path="/edit-hero/:id" element={<HeroDetail />} />
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
