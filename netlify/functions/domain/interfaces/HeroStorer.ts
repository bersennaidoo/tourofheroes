import { Hero } from "../models/Hero/Hero"

export interface HeroStorer {
    listHeroes: () =>  Hero[] | string
    createHero: (hero: Hero) => Hero | string
    editHero: (id: string, hero: Hero) => Hero | string
    deleteHero: (id: string) => Hero | string
    getHeroById: (id: string) => Hero | undefined
    resetHeroes: () => Hero[] | string
}