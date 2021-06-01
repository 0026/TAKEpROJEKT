import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MovieService } from 'src/app/service/movie/movie.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {map} from "rxjs/operators"

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;
  id=0;

  constructor(
    private movieService: MovieService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {

    this.movieForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      category: new FormControl(),
      year: new FormControl(),
      description: new FormControl(),
      price: new FormControl()
    })

    this.movieForm.controls["year"].setValidators([Validators.min(1900),Validators.required]);
    this.movieForm.controls["title"].setValidators([Validators.required]);
    this.movieForm.controls["category"].setValidators([Validators.required]);
    this.movieForm.controls["description"].setValidators([Validators.required]);
    this.movieForm.controls["price"].setValue(0);
    this.movieForm.controls["price"].setValidators([Validators.min(0)]);

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.movieService.getMovieById(this.id).subscribe(
        resp=>{
          this.movieForm.setValue({
            id: resp.id,
            title: resp.title,
            category: resp.category,
            year: resp.year,
            description: resp.description,
            price: resp.price
          });
        })
    }
    
  }

  ngOnInit(): void {}


  send(){
    if( this.id!=0){
      this.movieService.editMovie(this.movieForm.value).subscribe(
        resp => {
          this.snackBar.open("Zmiany zostały zapisane", "OK");
        }
      )
    }else{
      this.movieService.addMovie(this.movieForm.value).subscribe(
        resp => {
          this.snackBar.open("Film został dodany", "OK");
          this.movieForm.reset({price:0});
          this.movieForm.markAsUntouched();

        }
      )
    }

  }


}
