package com.accenture.web.restwebservices.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.web.restwebservices.domain.ShoppingClerk;
import com.accenture.web.restwebservices.exception.ResourceNotFoundException;
import com.accenture.web.restwebservices.repository.ShoppingClerkJpaRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ShoppingClerkJpaResourceController {
	
	@Autowired
	private ShoppingClerkJpaRepository shoppingClerkJpaRepository;
	
	@GetMapping("/jpa/clerks")
	public List<ShoppingClerk> getAllClerks() {
		return shoppingClerkJpaRepository.findAll();
	}
	
	@GetMapping("/jpa/clerk/{id}")
	public ResponseEntity<ShoppingClerk> getClerkById(@PathVariable(value = "id") Long id) 
			throws ResourceNotFoundException{
		ShoppingClerk shoppingClerk = shoppingClerkJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Clerk not found for this id :: " + id));
		return ResponseEntity.ok().body(shoppingClerk);
	}
	
	@PostMapping("/jpa/clerk")
	public ShoppingClerk createClerk(@RequestBody ShoppingClerk shoppingClerk) {
		return shoppingClerkJpaRepository.save(shoppingClerk);
	}
	
	@PutMapping("/jpa/clerk/{id}")
	public ResponseEntity<ShoppingClerk> updateClerk(@PathVariable(value = "id") Long id, @RequestBody ShoppingClerk clerkDetails) 
			throws ResourceNotFoundException{
		ShoppingClerk shoppingClerk = shoppingClerkJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Clerk not found for this id :: " + id));
		
		shoppingClerk.setName(clerkDetails.getName());		
		
		final ShoppingClerk updatedClerk = shoppingClerkJpaRepository.save(shoppingClerk);
		return ResponseEntity.ok(updatedClerk);
		
	}
	
	@DeleteMapping("/jpa/clerk/{id}")
	public Map<String, Boolean> deleteClerk(@PathVariable(value = "id") Long id) 
			throws ResourceNotFoundException{
		ShoppingClerk shoppingClerk = shoppingClerkJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Clerk not found for this id :: " + id));
		
		shoppingClerkJpaRepository.delete(shoppingClerk);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
		
	}

}
