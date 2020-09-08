DROP TABLE IF EXISTS `shopping_clerk`;
CREATE TABLE `shopping_clerk` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
 PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `is_discounted` boolean DEFAULT NULL,
  `discount_percentage` double DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `grocery_bill`;
CREATE TABLE `grocery_bill` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,  
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `bill_items`;
CREATE TABLE `bill_items` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `item_id` bigint(20) DEFAULT NULL,
  `quantity` int(20) DEFAULT NULL,
  `bill_id` bigint(20) DEFAULT NULL,
	PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `bill_clerk`;
CREATE TABLE `bill_clerk` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,  
  `bill_id` bigint(20) DEFAULT NULL,
  `clerk_id` bigint(20) DEFAULT NULL,
	PRIMARY KEY (`id`)
);