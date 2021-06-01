package com.projekt.take.controller;

import com.projekt.take.model.Movie;
import com.projekt.take.send.MovieWithoutDescription;
import com.projekt.take.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/movie")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @RequestMapping(method = RequestMethod.GET,value = "/")
    public Iterable<MovieWithoutDescription> getAll(){
        return movieService.getAllMovies();
    }

    @RequestMapping(method = RequestMethod.GET,value = "/{id}")
    public Movie getMovieById(@PathVariable int id){
        return movieService.getOneMovieById(id);
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/")
    public void addMovie(@RequestBody Movie m){
        movieService.addMovie(m);
    }

    @RequestMapping(method = RequestMethod.POST,value = "/")
    public void editMovie(@RequestBody Movie m){
        movieService.editMovie(m);
    }




}
