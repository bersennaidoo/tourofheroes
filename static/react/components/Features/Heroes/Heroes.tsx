import React, { FC, useState, useEffect } from "react";
import ListHeader from "../../blocks/ListHeader/list-header";
import heroes from "../../../../../cypress/fixtures/heroes.json";
import HeroList from "./HeroList";
import ModalYesNo from "../../blocks/ModalYesNo/modal-yes-no";

interface IHeroesProps {
}

const Heroes: FC<IHeroesProps> = (props: IHeroesProps) => {
  const {} = props;

  const [showModal, setShowModal] = useState<boolean>(false);

  const addNewHero = () => {
    console.log("handleAdd");
  };

  const handleRefresh = () => {
    console.log("handleRefresh");
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
          <HeroList heroes={heroes} handleDeleteHero={handleDeleteHero} />
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
