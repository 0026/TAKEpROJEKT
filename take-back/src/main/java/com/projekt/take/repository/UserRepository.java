package com.projekt.take.repository;

import com.projekt.take.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByLoginAndAndPassword(String login, String password);
}
