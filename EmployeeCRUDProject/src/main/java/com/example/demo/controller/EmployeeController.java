package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping(value = "/allemployees", method = RequestMethod.GET)
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
	
	@RequestMapping(value = "/addemployee", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}
	
	@RequestMapping(value = "/updateemployee", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Employee updateEmployee(@RequestBody Employee employee) {
		return employeeService.updateEmployee(employee);
	}
	
	@RequestMapping(value = "/deleteemployee/{empId}", method = RequestMethod.GET)
	public Boolean deleteEmployee(@PathVariable("empId") Integer empId) {
		try {
			employeeService.deleteEmployee(empId);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
	
	@RequestMapping(value = "/getemployee/{empId}", method = RequestMethod.POST)
	public Optional<Employee> getEmployee(@PathVariable("empId") Integer empId) {
		return employeeService.getEmployee(empId);
	}
}
