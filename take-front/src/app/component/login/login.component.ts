import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { LoginService } from 'src/app/service/login/login.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  userForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private cookieService: CookieService,
    private router: Router,
    private shopingCartService: ShoppingCartService ) {

    this.userForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    })
    this.loginForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    })

  }

  ngOnInit(): void {
    if (this.cookieService.get('login') != '') {
      this.router.navigate(['/home']);
    }
  }

  @ViewChild('tabGroup') tabGroup: any;

  saveUser() {
    this.userService.addUser(this.userForm.value).subscribe(
      resp => {
        this.tabGroup.selectedIndex = 0;
        this._snackBar.open("Dodano usera", "OK");
        this.userForm.reset();

      },
      error =>{
        this._snackBar.open("Login jest już zajęty", "OK");
      }
    )
  }

  login() {
    this.userService.checkPass(this.loginForm.value).subscribe(
      resp => {
        this.loginForm.reset();
        if (resp == null) {
          this._snackBar.open("User nieznaleziony", "OK");
        } else {
          //console.log(resp);
          this.cookieService.set('login', resp.login.toString());
          this.cookieService.set('password', resp.password.toString());
          this.cookieService.set('userId', resp.id.toString());
          if (resp.role == 1) {
            this.loginService.loginAdmin();
          }
          this.cookieService.set('role', resp.role.toString());
          this.loginService.zalogowany();

          this.shopingCartService.getCartSize().subscribe(
            resp =>{
              this.shopingCartService.updateNumberOfItemsInCart(resp);
          })
          
          this.router.navigate(['/home']);
        }
      }
    )
  }




}
