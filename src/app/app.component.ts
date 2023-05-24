import { Component } from '@angular/core';
import {StaffService} from './services/staff/staff.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private staff :StaffService){
    this.staff.getStaffData().subscribe(data=>{
   
       console.log(data['-N8SBML6NHxFDOHvQU-F'].orders.length)
    })
  }
  // title = 'pre-orderDashboard';
  
}
