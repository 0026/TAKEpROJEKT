package com.projekt.take.repository;

import com.projekt.take.model.Movie;
import org.springframework.data.repository.CrudRepository;

public interface  MovieRepository extends CrudRepository<Movie, Integer> { }