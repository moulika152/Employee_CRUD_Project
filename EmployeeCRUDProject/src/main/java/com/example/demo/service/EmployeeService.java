package com.example.demo.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@Service
public class EmployeeService implements IEmployeeService{
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public List<Employee> getAllEmployees() {
		List<Employee> employees = new ArrayList<>();
		Iterator<Employee> iterator = employeeRepository.findAll().iterator();
		while(iterator.hasNext()) {
			employees.add(iterator.next());
		}
		return employees;
	}

	@Override
	public Optional<Employee> getEmployee(Integer empId) {
		return employeeRepository.findById(empId);
	}

	@Override
	public Employee addEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public void deleteEmployee(Integer empId) {
		employeeRepository.deleteById(empId);
	}

}
