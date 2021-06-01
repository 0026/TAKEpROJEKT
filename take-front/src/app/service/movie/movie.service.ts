import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private userPath = 'http://localhost:8080/movie';
  constructor(private http: HttpClient) { }

  addMovie(m: any){
    return this.http.put<number>(this.userPath+"/",m);
  }

  editMovie(m: any){
    return this.http.post<number>(this.userPath+"/",m);
  }

  getMovieList(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.userPath+"/");
  }

  getMovieById(id:Number){
    return this.http.get<Movie>(this.userPath+"/"+id.toString());
  }
}
