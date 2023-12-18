import { Movie } from './movie';
import { Actor } from '../actors/actor';
import { Genre } from '../genres/genre';

export class MovieDetail extends Movie {
    actors: Actor[];
    genres: Genre[];

    constructor(
        id: number,
        name: string,  // Corrected from names to name
        fecha: string,   // Corrected from date_x to fecha
        score: number,
        overview: string,
        budget_x: number,  // Corrected from budget_x to budget
        revenue: number,
        country: string,
        image:string,
        actors: Actor[],
        genres: Genre[]
    ) {
        super(id, name, fecha, score, overview, budget_x, revenue, country,image);
        this.actors = actors;
        this.genres = genres;
    }
}
``
