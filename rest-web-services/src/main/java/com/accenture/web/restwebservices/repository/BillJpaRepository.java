package com.accenture.web.restwebservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.web.restwebservices.domain.GroceryBill;
import com.accenture.web.restwebservices.domain.RegularBill;


public interface BillJpaRepository extends JpaRepository<GroceryBill, Long>{
	


}
