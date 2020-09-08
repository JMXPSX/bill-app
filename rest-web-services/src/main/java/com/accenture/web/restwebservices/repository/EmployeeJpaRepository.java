package com.accenture.web.restwebservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.accenture.web.restwebservices.domain.Employee;

public interface EmployeeJpaRepository extends JpaRepository<Employee, Long>{

}
