import axios from "axios";
import { Villain } from "../../models/Villain/Villain";

export const seedVillains = (list: Villain[]) => {
  list.forEach((element) => {
    axios
      .post("http://localhost:8888/api/villains", element)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });
};

const villains: Villain[] = [
  {
    id: "VillainMadelyn",
    name: "Madelyn",
    description: "the cat whisperer",
  },
  {
    id: "VillainHaley",
    name: "Haley",
    description: "pen wielder",
  },
  {
    id: "VillainElla",
    name: "Ella",
    description: "fashionista",
  },
  {
    id: "VillainLandon",
    name: "Landon",
    description: "Mandalorian mauler",
  },
];

seedVillains(villains);
