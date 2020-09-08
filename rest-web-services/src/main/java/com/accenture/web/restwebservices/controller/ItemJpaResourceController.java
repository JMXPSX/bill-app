package com.accenture.web.restwebservices.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//import javax.validation.Valid;

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

import com.accenture.web.restwebservices.domain.Item;
import com.accenture.web.restwebservices.exception.ResourceNotFoundException;
import com.accenture.web.restwebservices.repository.ItemJpaRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ItemJpaResourceController {

	@Autowired
	private ItemJpaRepository itemJpaRepository;	

	@GetMapping("/jpa/items")
	public List<Item> getAllItems() {
		return itemJpaRepository.findAll();
	}
	
	@GetMapping("/jpa/item/{id}")
	public ResponseEntity<Item> getItemById(@PathVariable(value = "id") Long id) 
			throws ResourceNotFoundException{
		Item item = itemJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + id));
		return ResponseEntity.ok().body(item);
	}
	
	@PostMapping("/jpa/item")
	public Item createItem(@RequestBody Item item) {
		return itemJpaRepository.save(item);
	}
	
	@PutMapping("/jpa/item/{id}")
	public ResponseEntity<Item> updateItem(@PathVariable(value = "id") Long id, @RequestBody Item itemDetails) 
			throws ResourceNotFoundException{
		Item item = itemJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + id));
		
		item.setName(itemDetails.getName());
		item.setPrice(itemDetails.getPrice());
		item.setDiscounted(itemDetails.isDiscounted());
		item.setDiscountPercentage(itemDetails.getDiscountPercentage());
		
		final Item updatedItem = itemJpaRepository.save(item);
		return ResponseEntity.ok(updatedItem);
		
	}
	
	@DeleteMapping("/jpa/item/{id}")
	public Map<String, Boolean> deleteItem(@PathVariable(value = "id") Long id) 
			throws ResourceNotFoundException{
		Item item = itemJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Item not found for this id :: " + id));
		
		itemJpaRepository.delete(item);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
		
	}
	
}
