package com.accenture.web.restwebservices.domain;


public class DiscountBill extends GroceryBill{

	public DiscountBill(ShoppingClerk clerk) {
		super();		
	}
	
	@Override
	public double getTotalBill() {
		
		System.out.println(getItemList());
		
		return 0.00;
	}

}
