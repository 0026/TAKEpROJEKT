import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { LoginService } from './service/login/login.service';
import { ShoppingCartService } from './service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  czyZalogowany = false;
  admin = false;
  title = 'take-front';
  private subjectLogin = new Observable<boolean>();
  numberOfItemsInCart = new Observable<number>();
  numberOfItems =0;


  constructor(
    private loginService: LoginService,
    private shopingCartService: ShoppingCartService,
    private cookieService: CookieService
  ) {
    this.numberOfItemsInCart = shopingCartService.getNumberfItemsInasketAsObservable();
    this.numberOfItemsInCart.subscribe();
   }

  ngOnInit() {
    this.subjectLogin= this.loginService.getZalogowany();
    this.subjectLogin.subscribe(
      (resp: boolean) => {
        if (resp == true) {
          this.czyZalogowany = true;
        }
      }
    );

    this.loginService.getAdmin().subscribe(
      resp => {
        if (resp == true) {
          this.admin = true;
        }
      }
    );

    if(this.cookieService.get("userId")!=''){
      this.shopingCartService.getCartSize().subscribe(
        resp =>{
          this.shopingCartService.updateNumberOfItemsInCart(resp);
      })
    }
  }

  logOut(){
    this.loginService.logOut();
  }
}
