import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/service/movie/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  id=0;
  movie:Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private movieService:MovieService

  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie=movieService.getMovieById(this.id);
    this.movie.subscribe();
   }
   

  ngOnInit(): void {

  }

}
