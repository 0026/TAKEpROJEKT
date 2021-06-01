package com.projekt.take.send;

import com.projekt.take.model.Movie;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovieWithoutDescription {
    private int id;
    private String title;
    private String category;
    private int year;
    private double price;

    public MovieWithoutDescription(Movie m){
        this.id = m.getId();
        this.title= m.getTitle();
        this.category = m.getCategory();
        this.year = m.getYear();
        this.price = m.getPrice();
    }
}
