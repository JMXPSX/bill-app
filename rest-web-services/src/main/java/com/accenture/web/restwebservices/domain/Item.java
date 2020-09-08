package com.accenture.web.restwebservices.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Table(name="item")
@Entity
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private double price;
	private boolean isDiscounted;
	private double discountPercentage;
	
	
	public Item() {
		
	}
	
	public Item(String name, double price, boolean isDiscounted, double discountPercentage) {
		
		this.name = name;
		this.price = price;
		this.isDiscounted = isDiscounted;
		this.discountPercentage = discountPercentage;
		
	}
	
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public boolean isDiscounted() {
		return isDiscounted;
	}

	public void setDiscounted(boolean isDiscounted) {
		this.isDiscounted = isDiscounted;
	}

	public double getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(double discountPercentage) {
		this.discountPercentage = discountPercentage;
	}

	
	
}
