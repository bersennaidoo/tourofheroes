import { Hero } from "../models/Hero/Hero"

export interface HeroStorer {
    listHeroes: () =>  Hero[] | string
    createHero: (hero: Hero) => Hero | string
    editHero: (id: string, hero: Hero) => Hero | string
    deleteHero: (id: string) => Hero | string
    resetHeroes: () => Hero[] | string
}