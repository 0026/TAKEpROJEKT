package com.projekt.take.repository;

import com.projekt.take.model.ShoppingItem;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ShoppingItemRepository extends CrudRepository<ShoppingItem, Integer> {
    ShoppingItem findByUserIdAndMovieId(int u, int m);
    List<ShoppingItem> findByUserId(int u);
}
