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

import com.accenture.web.restwebservices.domain.DiscountBill;
import com.accenture.web.restwebservices.domain.GroceryBill;
import com.accenture.web.restwebservices.domain.Item;
import com.accenture.web.restwebservices.domain.RegularBill;
import com.accenture.web.restwebservices.exception.ResourceNotFoundException;
import com.accenture.web.restwebservices.repository.BillJpaRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BillJpaResourceController {
	
	@Autowired
	private BillJpaRepository billJpaRepository;
	
	@GetMapping("/jpa/bills")
	public List<GroceryBill> getAllBills(){		
		return billJpaRepository.findAll();
	}
	
	@PostMapping("/jpa/bill")
	public GroceryBill createBill(@RequestBody GroceryBill groceryBill) {		
		return billJpaRepository.save(groceryBill);
	}
	
	@GetMapping("/jpa/bill/{id}")
	public ResponseEntity<GroceryBill> getBillById(@PathVariable(value = "id") Long id) 
			throws ResourceNotFoundException{
		GroceryBill groceryBill = billJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Grocery Bill not found for this id :: " + id));
			
		
		return ResponseEntity.ok().body(groceryBill);
	}
	
	@PutMapping("/jpa/bill/{id}")
	public ResponseEntity<GroceryBill> updateBill(@PathVariable(value = "id") Long id, @RequestBody GroceryBill billDetails) 
			throws ResourceNotFoundException{
		GroceryBill groceryBill = billJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Grocery Bill not found for this id :: " + id));		
		
		groceryBill.setItemList(billDetails.getItemList());
		groceryBill.setClerk(billDetails.getClerk());		
		
		final GroceryBill updatedBill = billJpaRepository.save(groceryBill);
		return ResponseEntity.ok(updatedBill);
		
	}
	
	@DeleteMapping("/jpa/bill/{id}")
	public Map<String, Boolean> deleteBill(@PathVariable(value = "id") Long id) 
			throws ResourceNotFoundException{
		GroceryBill groceryBill = billJpaRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Bill not found for this id :: " + id));
		
		billJpaRepository.delete(groceryBill);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
		
	}
}
