package com.projekt.take.send;

import com.projekt.take.model.ShoppingItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShopingItemCart {
    private long id;
    private int quantity;
    private MovieWithoutDescription movie;

    public ShopingItemCart(ShoppingItem si){
        this.id = si.getId();
        this.quantity = si.getQuantity();
        this.movie = new MovieWithoutDescription(si.getMovie());
    }
}
