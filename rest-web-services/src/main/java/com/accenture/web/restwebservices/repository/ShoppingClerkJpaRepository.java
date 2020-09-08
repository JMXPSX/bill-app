package com.accenture.web.restwebservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.web.restwebservices.domain.Item;
import com.accenture.web.restwebservices.domain.ShoppingClerk;

public interface ShoppingClerkJpaRepository extends JpaRepository<ShoppingClerk, Long>{

}
