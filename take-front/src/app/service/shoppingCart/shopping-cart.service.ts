import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { Movie } from 'src/app/model/movie/movie';
import { ShoppingCart } from 'src/app/model/shoppingCart/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private numberOfItems =new BehaviorSubject(0);

  private shopingPath = 'http://localhost:8080/shoppingItem';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
    ) { }


  getAllItemsInCart(){
    return this.http.get<any[]>(this.shopingPath+"/"+this.cookieService.get("userId")); 
  }

  addToShoppingCart(movieId:Number){
    return this.http.post<any>(this.shopingPath+"/"+this.cookieService.get("userId"),movieId); 
  }

  removeItemFromCart(movieId:number){
    return this.http.put<any>(this.shopingPath+"/"+this.cookieService.get("userId"),movieId); 
  }

  getCartSize(){
    return this.http.get<any>(this.shopingPath+"/getSize/"+this.cookieService.get("userId")); 
  }

  getNumberfItemsInasketAsObservable(){
    return this.numberOfItems.asObservable();
  }

  updateNumberOfItemsInCart(n: number){
    this.numberOfItems.next(n);
  }


}
