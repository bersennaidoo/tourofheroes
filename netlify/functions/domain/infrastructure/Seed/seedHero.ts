import axios from "axios";
import { Hero } from "../../models/Hero/Hero";

export const seedHero = (list: Hero[]) => {
  list.forEach((element) => {
    axios
      .post("http://localhost:8888/api/heroes", element)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });
};
const heroes: Hero[] = [
  {
    id: "HeroAslaug",
    name: "Aslaug",
    description: "warrior queen",
  },
  {
    id: "HeroBjorn",
    name: "Bjorn Ironside",
    description: "king of 9th century Sweden",
  },
  {
    id: "HeroIvar",
    name: "Ivar the Boneless",
    description: "commander of the Great Heathen Army",
  },
  {
    id: "HeroLagertha",
    name: "Lagertha the Shieldmaiden",
    description: "aka Hlaðgerðr",
  },
  {
    id: "HeroRagnar",
    name: "Ragnar Lothbrok",
    description: "aka Ragnar Sigurdsson",
  },
  {
    id: "HeroThora",
    name: "Thora Town-hart",
    description: "daughter of Earl Herrauðr of Götaland",
  },
];

seedHero(heroes)