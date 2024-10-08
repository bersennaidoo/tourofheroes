import React, { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardContent from "../../blocks/CardContent/card-content";
import { Hero } from "../../../domain/models/Hero/Hero";
import ButtonFooter from "../../blocks/ButtonFooter/button-footer";
import { FaEdit, FaRegSave } from "react-icons/fa";

interface IHeroListProps {
  heroes: Hero[];
  handleDeleteHero: (hero: Hero) => void
}

const HeroList: FC<IHeroListProps> = (props: IHeroListProps) => {
  const { heroes, handleDeleteHero } = props;
  const navigate = useNavigate()

  const handleSelectHero = (heroId: string) => {
    const hero = heroes.find((h: Hero) => h.id === heroId)
    //navigate(`/tourofheroes/heroes/edit-hero/${heroId}`)
    navigate(`/tourofheroes/heroes/edit-hero/${hero?.id}?name=${hero?.name}&description=${hero?.description}`)
    console.log("handleSelectHero")
  };

  return (
    <ul data-cy="hero-list" className="list">
      {heroes.map((hero, index) => (
        <li data-cy={`hero-list-item-${index}`} key={index}>
          <div>
            <CardContent name={hero.name} description={hero.description} />
            <footer>
              <ButtonFooter
                label="Delete"
                IconClass={FaRegSave}
                onClick={() => handleDeleteHero(hero)}
              />
              <ButtonFooter
                label="Edit"
                IconClass={FaEdit}
                onClick={() => handleSelectHero(hero.id)}
              />
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HeroList;
