package com.accenture.web.restwebservices.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accenture.web.restwebservices.domain.Employee;
import com.accenture.web.restwebservices.repository.EmployeeJpaRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EmployeeJpaResourceController {
	
	@Autowired
	private EmployeeJpaRepository employeeJpaRepository;
	
	@GetMapping("/jpa/employees")
	public List<Employee> getAllEmployees(){
		
		return employeeJpaRepository.findAll();
		
	}

}
