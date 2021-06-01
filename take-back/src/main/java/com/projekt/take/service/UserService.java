package com.projekt.take.service;

import com.projekt.take.model.User;
import com.projekt.take.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void addUser(User u){
        u.setRole(0);
        userRepository.save(u);
    }

    public Iterable<User> getAll(){
        return userRepository.findAll();
    }

    public User login(User user){
        User u =userRepository.findByLoginAndAndPassword(user.getLogin(),user.getPassword());
        if(u==null){
            return new User();
        }
        return u;
    }

}
