import React, { FC, useState, useEffect } from "react";
import CardContent from "../../blocks/CardContent/card-content";
import { Hero } from "../../../models/Hero/Hero";
import ButtonFooter from "../../blocks/ButtonFooter/button-footer";
import { FaEdit, FaRegSave } from "react-icons/fa";

interface IHeroListProps {
  heroes: Hero[];
  handleDeleteHero: () => void
}

const HeroList: FC<IHeroListProps> = (props: IHeroListProps) => {
  const { heroes, handleDeleteHero } = props;

  const handleSelectHero = () => {
    console.log("handleSelectHero");
  };

  return (
    <ul data-cy="hero-list">
      {heroes.map((hero, index) => (
        <li data-cy={`hero-list-item-${index}`} key={hero.id}>
          <div>
            <CardContent name={hero.name} description={hero.description} />
            <footer>
              <ButtonFooter
                label="Delete"
                IconClass={FaRegSave}
                onClick={handleDeleteHero}
              />
              <ButtonFooter
                label="Edit"
                IconClass={FaEdit}
                onClick={handleSelectHero}
              />
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HeroList;
