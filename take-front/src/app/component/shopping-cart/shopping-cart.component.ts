import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items : Observable<any>;
  sumOfCart=0;

  constructor(
    private shopingCartService:ShoppingCartService
  ) { 
    this.items = shopingCartService.getAllItemsInCart();
    this.items.subscribe(resp=>{
      this.sumOfCart=0;
      resp.forEach((element:any) => {
        this.sumOfCart+=element.quantity*element.movie.price;
      });
    });
  }

  ngOnInit(): void {
  }

  reloadData(){
    this.items = this.shopingCartService.getAllItemsInCart();
    this.items.subscribe(resp=>{
      var sum=0;
      this.sumOfCart=0;
      resp.forEach((element:any) => {
        sum+=element.quantity;
        this.sumOfCart+=element.quantity*element.movie.price;
      });
      this.shopingCartService.updateNumberOfItemsInCart(sum);
    });

    
  }

  add(id: number){
    this.shopingCartService.addToShoppingCart(id).subscribe(
      resp=>{
        this.reloadData();
        
      }
    )
  }
  remove(id: number){
    this.shopingCartService.removeItemFromCart(id).subscribe(
      resp=>{
        this.reloadData()
      }
    )
  }



}
