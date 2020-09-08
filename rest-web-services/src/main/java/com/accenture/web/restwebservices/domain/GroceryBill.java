package com.accenture.web.restwebservices.domain;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;
import javax.persistence.Table;


@Table(name="grocery_bill")
@Entity
public class GroceryBill {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;		

	@OneToMany(fetch=FetchType.EAGER)
	@JoinTable(name="bill_items", joinColumns=@JoinColumn(name="bill_id"), 
	inverseJoinColumns=@JoinColumn(name="item_id"))
	protected List<Item> itemList;				

	@OneToOne(fetch=FetchType.EAGER)
	@JoinTable(name="bill_clerk", joinColumns=@JoinColumn(name="bill_id"), 
	inverseJoinColumns=@JoinColumn(name="clerk_id"))
	private ShoppingClerk clerk;
	
	public GroceryBill() {
		
	}

	public GroceryBill(ShoppingClerk clerk) {
		this.clerk = clerk;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}


	public List<Item> getItemList() {
		return itemList;
	}	

	public void setItemList(List<Item> itemList) {
		this.itemList = itemList;
	}	


	public ShoppingClerk getClerk() {		
		return clerk;
	}

	public void setClerk(ShoppingClerk clerk) {
		this.clerk = clerk;
	}

	public void addItem(Item item) {
		
	}
	
	public void printReceipt() {
		
	}
	
	public double getTotalBill() {
		return 0.00;
	}

	@Override
	public String toString() {
		return "GroceryBill [itemList=" + itemList + ", clerk=" + clerk.getId() + "]";
	}
	
	
	
}
