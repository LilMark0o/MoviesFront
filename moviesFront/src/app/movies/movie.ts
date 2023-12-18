export class Movie {
    id: number;
    name: string;
    date: string;
    score: number;
    overview: string;
    budget: number;
    revenue: number;
    country: string;
    image: string;

    constructor(id: number, name: string, year: string, score: number, overview: string, budget: number, revenue: number, country: string, image: string) {
        this.id = id;
        this.name = name;
        // Convert the string date to a JavaScript Date object
        this.date = year;
        this.score = score;
        this.overview = overview;
        this.budget = budget;
        this.revenue = revenue;
        this.country = country;
        this.image = image;
    }
}
