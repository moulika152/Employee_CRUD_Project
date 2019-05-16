import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid-community";
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {

  private gridOptions: GridOptions; 
  constructor(private location: Location, private service: EmployeeService) {
   }
   data: Employee[] = [];

  ngOnInit() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "Employee id",
                field: "empId",
                resizable: true
            },
            {
                headerName: "Employee Name",
                field: "employeeName",
                resizable: true
            },
        ];
        this.service.getAllEmployees().subscribe(
          response =>{
            this.gridOptions.api.showNoRowsOverlay()
            this.data = response;
          }
        );
        
  }
  ngAfterViewInit(): void {
    this.gridOptions.api.showLoadingOverlay();
    this.gridOptions.api.sizeColumnsToFit();
  }

  goBack(){
    this.location.back();
  }

}
