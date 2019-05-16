import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(private location: Location,private service:EmployeeService, 
    private fb: FormBuilder, private snackBar: MatSnackBar) { 

    }
    deleteForm = this.fb.group({
      EmployeeId: new FormControl('', Validators.required)
    });
  ngOnInit() {
  }
  deleteEmployee() {
    this.service.deleteEmployee(this.deleteForm.get('EmployeeId').value).subscribe(
      response => {
        if(response){
          this.snackBar.open("Deleted successfully", "close", {
            duration: 5000
          })
        }else{
          this.snackBar.open("Employee id does not exist", "close", {
            duration: 5000
          })
        }
      },
      error => {
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
    this.deleteForm.reset();
  }

}
