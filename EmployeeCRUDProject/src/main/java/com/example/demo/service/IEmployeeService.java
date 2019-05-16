package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Employee;

public interface IEmployeeService {
	List<Employee> getAllEmployees();
	Optional<Employee> getEmployee(Integer empId);
	Employee addEmployee(Employee employee);
	Employee updateEmployee(Employee employee);
	void deleteEmployee(Integer empId);
}
