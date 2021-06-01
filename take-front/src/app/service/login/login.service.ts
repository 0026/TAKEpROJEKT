import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private subjectZalogowany = new BehaviorSubject<boolean>(false);
  private subjectAdmin = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieService: CookieService,
    private router:Router
  ) { 
    if (this.cookieService.get('login') != '') {
      this.zalogowany() 
    }

    if (this.cookieService.get("role") == "1") {
      this.loginAdmin()
    }
  }

  getAdmin(): Observable<boolean> {
    return this.subjectAdmin.asObservable();
  }

  getZalogowany(): Observable<boolean> {
    return this.subjectZalogowany.asObservable();
  }

  zalogowany() {
    this.subjectZalogowany.next(true);
  }

  loginAdmin(){
    this.subjectAdmin.next(true);
  }

  logOut(){
    this.cookieService.deleteAll("/","localhost");
    //this.router.navigate(['/login']);
  }

}
