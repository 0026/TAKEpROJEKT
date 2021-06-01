import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userPath = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }


  addUser(u: any){
    return this.http.post<number>(this.userPath+"/",u);
  }
  

  checkPass(u : any){
    return this.http.post<User>(this.userPath+'/checkLoginAndPass',u);
  }

}
