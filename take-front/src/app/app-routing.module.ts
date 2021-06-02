import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { HomeComponent } from './component/home/home.component';
import { ListMovieComponent } from './component/list-movie/list-movie.component';
import { LoginComponent } from './component/login/login.component';
import { MovieInfoComponent } from './component/movie-info/movie-info.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: AddMovieComponent },
  { path: 'create/:id', component: AddMovieComponent },
  { path: 'list', component: ListMovieComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'info/:id', component: MovieInfoComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
