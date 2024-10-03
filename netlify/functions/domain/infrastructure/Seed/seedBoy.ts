import axios from "axios";
import { Boy } from "../../models/Boy/Boy";

const seedBoys = (list: Boy[]) => {
  list.forEach((element) => {
    axios
      .post("http://localhost:8888/api/boys", element)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  });
};

const boys: Boy[] = [
  {
    id: "BoyHomelander",
    name: "Homelander",
    description: "Like Superman, but a jerk.",
  },
  {
    id: "BoyAnnieJanuary",
    name: "Annie January",
    description: "The Defender of Des Moines.",
  },
  {
    id: "BoyBillyButcher",
    name: "Billy Butcher",
    description:
      "A former member of the British special forces turned vigilante.",
  },
  {
    id: "BoyBlackNoir",
    name: "Black Noir",
    description:
      "Master Martial Artist, expert hand-to-hand combatant highly trained in various forms of martial arts.",
  },
];

seedBoys(boys)