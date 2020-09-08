insert into shopping_clerk(id, name)
values(1001, 'Larry Gadon');

insert into shopping_clerk(id, name)
values(1002, 'Rodante Marcoleta');

insert into shopping_clerk(id, name)
values(1003, 'Danny Green');

insert into item(id, name, price, is_discounted, discount_percentage)
values(1001,'coke', 100.00, false, 10.00);

insert into item(id, name, price, is_discounted, discount_percentage)
values(1002,'sprite', 101.00, true, 11.00);

insert into item(id, name, price, is_discounted, discount_percentage)
values(1003,'royal', 102.00, false, 12.00);

insert into grocery_bill(id)
values(111);

insert into bill_clerk(id, bill_id, clerk_id)
values(101, 111, 1001);

insert into bill_items(id, item_id, bill_id)
values(101, 1001, 111);

insert into bill_items(id, item_id, bill_id)
values(102, 1002, 111);