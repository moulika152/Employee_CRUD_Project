import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showEmployees =false;
  constructor(private router: Router){

  }
  addEmployee(){
    this.router.navigate(['/create_update_employee']);
  }

  deleteEmployee(){
    this.router.navigate(['/delete_employee']);
  }

  getAllEmployees(){
    this.router.navigate(['/get_all_employees']);
  }
}
