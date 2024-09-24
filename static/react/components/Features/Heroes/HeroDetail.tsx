import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { Hero } from "../../../models/Hero/Hero";
import InputDetail from "../../blocks/InputDetail/input-detail";
import ButtonFooter from "../../blocks/ButtonFooter/button-footer";
import { FaUndo, FaRegSave } from "react-icons/fa";

interface IHeroDetailProps {
  hero: Hero
}

const HeroDetail: FC<IHeroDetailProps> = (props: IHeroDetailProps) => {
  const { hero } = props;

  //const [value, setValue] = useState(initialValue)
  const [heroe, setHeroe] = useState<Hero>({...hero})

  const handleCancel = () => console.log("handleCancel");
  const updateHero = () => console.log("updateHero")
  const createHero = () => console.log("createHero")
  const handleSave = () => {
    console.log("handleSave")
    return hero.name ? updateHero() : createHero()
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleNameChange")
    setHeroe({ ...heroe, name: e.target.value })
  }
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleDescriptionChange")
    setHeroe({ ...heroe, description: e.target.value })
  }

  return (
    <div data-cy="hero-detail" className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">{hero.name}</p>
      </header>
      <div className="card-content">
        <div className="content">
          {hero.id && (
            <InputDetail
              name={"id"}
              value={hero.id}
              readOnly={true}
            ></InputDetail>
          )}
          <InputDetail
            name={"name"}
            value={hero.name}
            placeholder="e.g. Colleen"
            onChange={handleNameChange}
          ></InputDetail>
          <InputDetail
            name={"description"}
            value={hero.description}
            placeholder="e.g. dance fight!"
            onChange={handleDescriptionChange}
          ></InputDetail>
        </div>
      </div>
      <footer className="card-footer">
        <ButtonFooter
          label="Cancel"
          IconClass={FaUndo}
          onClick={handleCancel}
        />
        <ButtonFooter label="Save" IconClass={FaRegSave} onClick={handleSave} />
      </footer>
    </div>
  );
};

export default HeroDetail;
