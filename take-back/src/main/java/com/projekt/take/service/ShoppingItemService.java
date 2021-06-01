package com.projekt.take.service;

import com.projekt.take.model.Movie;
import com.projekt.take.model.ShoppingItem;
import com.projekt.take.model.User;
import com.projekt.take.repository.MovieRepository;
import com.projekt.take.repository.ShoppingItemRepository;
import com.projekt.take.repository.UserRepository;
import com.projekt.take.send.ShopingItemCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShoppingItemService {
    @Autowired
    private ShoppingItemRepository shoppingItemRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MovieRepository movieRepository;

    public void addItemToCart(Integer userId,Integer movieId){
        ShoppingItem shoppingItem =shoppingItemRepository.findByUserIdAndMovieId(userId,movieId);
        if(shoppingItem!=null){
            shoppingItem.setQuantity(shoppingItem.getQuantity()+1);
            shoppingItemRepository.save(shoppingItem);
        }else{
            User user = userRepository.findById(userId).get();
            Movie movie =movieRepository.findById(movieId).get();
            ShoppingItem si = new ShoppingItem();
            si.setQuantity(1);
            si.setMovie(movie);
            si.setUser(user);
            shoppingItemRepository.save(si);
        }
    }

    public void removeItemFromCart(Integer userId,Integer movieId){
        ShoppingItem shoppingItem =shoppingItemRepository.findByUserIdAndMovieId(userId,movieId);
        if(shoppingItem.getQuantity()>1){
            shoppingItem.setQuantity(shoppingItem.getQuantity()-1);
            shoppingItemRepository.save(shoppingItem);
        }else{
            shoppingItemRepository.deleteById(shoppingItem.getId());
        }
    }

    public Iterable<ShopingItemCart> getAllInCartForUser(int id){
        List<ShoppingItem> shopingItemList = shoppingItemRepository.findByUserId(id);
        ArrayList<ShopingItemCart> al= new ArrayList<>();
        for(ShoppingItem si: shopingItemList){
            al.add(new ShopingItemCart(si));
        }
        return al;
    }

    public int getNumberOfItemsForUSer(int userId){
        int sum = 0;
        for(ShoppingItem si: shoppingItemRepository.findByUserId(userId)){
            sum += si.getQuantity();
        }
        return sum;
    }
}
