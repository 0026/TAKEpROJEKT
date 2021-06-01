package com.projekt.take.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ShoppingItem {
    @Id
    @GeneratedValue
    private int id;

    private int quantity;

    @ManyToOne
    private User user;

    @ManyToOne
    private Movie movie;

}
