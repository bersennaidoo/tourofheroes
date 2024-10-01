import { useCallback } from "react";
import { Hero } from "../../models/Hero/Hero";
import axios, { AxiosResponse } from "axios";

export class HeroApiService {

  public listHeroes = (route: string) => {

    const response = this.getData(route);

    return response;
  };

  // add a hero
  public addHero = (route: string, hero: Hero) => {
    // call with axios
    // return hero successfully add
  };

  // update a hero
  public updateHero = (route: string, hero: Hero) => {
    // call with axios
    // return hero updated
  };

  public getHeroById = (route: string) => {
    //call with axios
    // return hero
  };

  // delete a hero
  public deleteHero = (route: string) => {
    // call with axios
    // return hero successfully deleted
  };

  private parseList = (response: AxiosResponse<any>) => {
    if (response.status !== 200) throw Error(response.statusText);
    let list = response.data;
    if (typeof list !== "object") {
      list = [];
    }

    return list;
  };

  private getData = useCallback(async (route: string) => {
    const promise = await axios.get(route);
    return this.parseList(promise);
  }, []);
}
