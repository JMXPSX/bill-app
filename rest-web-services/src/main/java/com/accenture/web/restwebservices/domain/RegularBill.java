package com.accenture.web.restwebservices.domain;


public class RegularBill extends GroceryBill{

	public RegularBill(ShoppingClerk clerk) {
		super();		
	}

	@Override
	public double getTotalBill() {
		return 1.00;
	}
}
