import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../services/staff/staff.service'
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  


public flag= false
 status_array:any = []
 Highcharts = Highcharts;
 chartOptions = {};

  constructor(private staff :StaffService) { }

  ngOnInit(): void {
// console.log(this.orderStatus())
    
  }
  //return the order status
  orderStatus(){
  this.staff.getStaffData().subscribe(data=>{

    
    Object.entries(data).map(i=>{
      let obj: any= i[1]
      obj.orders.map((x: any)=>{       
        this.status_array.push(x.status)
        this.flag=true
      })
     
    })
 })

 return this.status_array
}


}
