import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { RefetchOptions, RefetchQueryFilters, QueryObserverResult } from "react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Hero } from "../../../domain/models/Hero/Hero";
import InputDetail from "../../blocks/InputDetail/input-detail";
import ButtonFooter from "../../blocks/ButtonFooter/button-footer";
import { FaUndo, FaRegSave } from "react-icons/fa";
import { HeroRouteService } from "../../../domain/services/heroRouteService/heroRouteService";
import { HeroApiService } from "../../../domain/services/heroApiService/heroApiService";
import { HookService } from "../../../domain/services/hookService/hookService";
import { HeroModel } from "../../../domain/models/Hero/HeroModel";
import { Certificate } from "crypto";

interface IHeroDetailProps {
   refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>
}

const HeroDetail: FC<IHeroDetailProps> = (props: IHeroDetailProps) => {
  const { refetch } = props
     // Create and Inject dependencies into HeroModel
  const heroRouterSrv = new HeroRouteService()
  const heroApiSrv = new HeroApiService()
  const hookSrv = new HookService()
  const heroModel = new HeroModel(heroApiSrv, heroRouterSrv, hookSrv)
  const { id } = useParams()
  const [searchParams] = useSearchParams()

  const name = searchParams.get("name")
  const description = searchParams.get("description")
  const navigate = useNavigate()

  //const [value, setValue] = useState(initialValue)
  const [hero, setHero] = useState({id, name, description})
  const { mutate: createHero, status, error: postError } = heroModel.addHero()
  const { mutate: updateHero, isLoading, isError } = heroModel.updateHero(id as string)

  const handleCancel = () => {
    navigate("/tourofheroes/heroes")
    console.log("handleCancel");
  }
  //const updateHero = () => console.log("updateHero")
  const handleSave = () => {
    console.log("handleSave")
    //updateHero(hero as Hero)
   return name as string ? updateHero(hero as Hero) : createHero(hero as Hero)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleNameChange")
    setHero({ ...hero, name: e.target.value })
  }
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleDescriptionChange")
    setHero({ ...hero, description: e.target.value })
  }

  return (
    <div data-cy="hero-detail" className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">{name}</p>
        &nbsp;
      </header>
      <div className="card-content">
        <div className="content">
          {id && (
            <InputDetail
              name={"id"}
              value={id}
              readOnly={true}
            ></InputDetail>
          )}
          <InputDetail
            name={"name"}
            value={name as string ? name as string : ""}
            placeholder="e.g. Colleen"
            onChange={handleNameChange}
          ></InputDetail>
          <InputDetail
            name={"description"}
            value={description as string ? description as string : ""}
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
