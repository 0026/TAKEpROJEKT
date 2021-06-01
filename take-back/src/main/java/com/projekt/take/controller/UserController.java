package com.projekt.take.controller;

import com.projekt.take.model.User;
import com.projekt.take.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(path="/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST,value = "/")
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @RequestMapping(method = RequestMethod.GET,value = "/")
    public Iterable<User> getAll(){
        return userService.getAll();
    }

    @RequestMapping(method = RequestMethod.POST,value = "/checkLoginAndPass")
    public User login(@RequestBody User user){
        return userService.login(user);
    }

}

