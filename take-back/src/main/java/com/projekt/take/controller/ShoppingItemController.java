package com.projekt.take.controller;

import com.projekt.take.send.ShopingItemCart;
import com.projekt.take.service.ShoppingItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/shoppingItem")
public class ShoppingItemController {
    @Autowired
    private ShoppingItemService shoppingItemService;

    @RequestMapping(method = RequestMethod.POST,value = "/{userId}")
    public int addItemToCart(@PathVariable int userId, @RequestBody int movieId){
        shoppingItemService.addItemToCart(userId,movieId);
        return shoppingItemService.getNumberOfItemsForUSer(userId);
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/{userId}")
    public void removeItemFromCart(@PathVariable int userId, @RequestBody int movieId){
        shoppingItemService.removeItemFromCart(userId,movieId);
    }

    @RequestMapping(method = RequestMethod.GET,value = "/{userId}")
    public Iterable<ShopingItemCart> getAllItemForUser(@PathVariable int userId){
        return shoppingItemService.getAllInCartForUser(userId);
    }

    @RequestMapping(method = RequestMethod.GET,value = "/getSize/{userId}")
    public int getNumberOfItemsForUser(@PathVariable int userId){
        return shoppingItemService.getNumberOfItemsForUSer(userId);
    }


}
