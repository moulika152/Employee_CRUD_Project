import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-create-update',
  templateUrl: './employee-create-update.component.html',
  styleUrls: ['./employee-create-update.component.css']
})
export class EmployeeCreateUpdateComponent implements OnInit {

  employee: Employee;
  constructor(private location: Location, private service: EmployeeService, private fb: FormBuilder, private snackBar: MatSnackBar) { 

  }

  createForm = this.fb.group({
    EmployeeId: new FormControl('', Validators.required),
    EmployeeName: new FormControl('', Validators.required)
  })
  ngOnInit() {
  }

  createEmployee(){
    this.employee = {
      empId:this.createForm.get('EmployeeId').value,
      employeeName:this.createForm.get('EmployeeName').value
    };

    this.service.addEmployee(this.employee).subscribe(
      response =>{
        this.snackBar.open("Added successfully", "close", {
          duration: 5000
        })
      }
    );
  }

  updateEmployee(){
    this.employee = {
      empId:this.createForm.get('EmployeeId').value,
      employeeName:this.createForm.get('EmployeeName').value
    };

    this.service.updateEmployee(this.employee).subscribe(
      response =>{
        this.snackBar.open("Updated successfully", "close", {
          duration: 5000
        })
      },
      error =>{
        this.snackBar.open(" "+error, "close", {
          duration: 5000
        })
      }
    );
  }
  goBack(){
    this.location.back();
  }

  reset(){
    this.createForm.reset();
  }
}
