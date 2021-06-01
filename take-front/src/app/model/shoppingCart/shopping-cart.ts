import { Movie } from "../movie/movie";

export class ShoppingCart {
    public quantity:number;
    public item:Movie;

    constructor(m:Movie){
        this.item = m;
        this.quantity = 1;
    }
}
