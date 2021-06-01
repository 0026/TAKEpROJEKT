package com.projekt.take.service;

import com.projekt.take.model.Movie;
import com.projekt.take.repository.MovieRepository;
import com.projekt.take.send.MovieWithoutDescription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public Iterable<MovieWithoutDescription> getAllMovies(){
        Iterable<Movie> movieList = movieRepository.findAll();
        ArrayList<MovieWithoutDescription> withoutDescriptionsList = new ArrayList<>();
        for(Movie m: movieList){
            withoutDescriptionsList.add(new MovieWithoutDescription(m));
        }
        return withoutDescriptionsList;
    }

    public void addMovie(Movie m){
        movieRepository.save(m);
    }

    public Movie getOneMovieById(int id){
        return movieRepository.findById(id).get();
    }

    public void editMovie(Movie m){
        movieRepository.save(m);
    }
}
