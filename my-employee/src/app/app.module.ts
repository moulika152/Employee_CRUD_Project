import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { HttpClientModule }    from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeeCreateUpdateComponent } from './employee-create-update/employee-create-update.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDeleteComponent,
    EmployeeCreateUpdateComponent,
    EmployeeGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
