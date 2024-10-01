import { Hero } from "../models/Hero/Hero"

export interface HeroStorer {
    listHeroes: () =>  Hero[] | string
}