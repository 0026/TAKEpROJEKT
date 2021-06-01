import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie/movie';
import { LoginService } from 'src/app/service/login/login.service';
import { MovieService } from 'src/app/service/movie/movie.service';
import { ShoppingCartService } from 'src/app/service/shoppingCart/shopping-cart.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  movieList:Observable<Movie[]>;
  admin = false;
  reg:string ='';

  constructor(
    private movieService: MovieService,
    private loginService: LoginService,
    private router:Router,
    private shopingCartService:ShoppingCartService,
    private snackBar: MatSnackBar,
  ) { 
    this.movieList = this.movieService.getMovieList();
    this.loginService.getAdmin().subscribe(resp =>{
        this.admin = resp;
    })
  }

  ngOnInit(): void {
    this.movieList.subscribe();

  }

  addToCart(movieId:Number){
    this.shopingCartService.addToShoppingCart(movieId).subscribe(
      resp => {
        this.snackBar.open("Dodano element do koszyka", "OK");
        this.shopingCartService.updateNumberOfItemsInCart(resp);
      });
  }

  edit(id:Number){
    this.router.navigate(['/create',id.toString()]);
  }




  onKey(a:any){
    this.reg = (a.target as HTMLInputElement).value;
    //console.log(this.reg);
  }
  
  filtrate(ob:any, r:string){
    if(r=='') return true;
    return ob.category.includes(r);
  }

}
