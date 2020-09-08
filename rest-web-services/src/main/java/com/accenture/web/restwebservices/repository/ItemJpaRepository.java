package com.accenture.web.restwebservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.web.restwebservices.domain.Item;

public interface ItemJpaRepository extends JpaRepository<Item, Long>{

}
