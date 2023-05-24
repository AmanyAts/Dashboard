import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service'
import { DataComponent } from '../widget/data/data.component'
import { MapComponent } from '../widget/map/map.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent implements OnInit {

  NumOfOrdersT = 'Total number of orders (YTD)'
  numOfOrders = 0
  SalesAmount = 'Sales Amount (Quartely)'
  SalesAmountNum = 0
  AvgOrderst = 'Average Orders / Staff (Quartely)'
  AvgOrders = 0
  StaffRateT = 'Staff Retention Rate (Quartely)'
  StaffRate = 0
  home = 'home'
  mug = 'local_cafe'
  wallet = 'account_balance_wallet'
  stafrate = 'supervisor_account'
  circle = 'donut_large'

  nOfOrder_Q = 0
  AvgOrder = 0
  RetentionRate: any

  getPercentageIncrease(numA: any, numB: any) {
    if (numB === 0) {
      return 100
    } else {

      return ((numA - numB) / numB) * 100;
    }

  }
  constructor(private staff: StaffService, private dataComponent: DataComponent, private mapComponent: MapComponent) { }

  ngOnInit(): void {

    //to find number of order in the quater
    this.staff.getStaffData().subscribe(data => {
      let nOfOrder_Q8 = 0
      let numOfStaff: any[] = []
      Object.entries(data).map(i => {
        let obj: any = i[1]
        obj.orders.map((x: any) => {
          const d = new Date(x.receive_date);

          if (!(d < this.dataComponent.getYTD())) {
            this.numOfOrders++

          }

          if (!(d < this.dataComponent.getQuarterly(4))) {
            this.nOfOrder_Q++
            this.SalesAmountNum += x.total_price
            numOfStaff.push(obj.Corp_Id)

          }

          if (d > this.dataComponent.getQuarterly(8) && !(d > this.dataComponent.getQuarterly(4))) {
            nOfOrder_Q8++
          }
          this.RetentionRate = this.getPercentageIncrease(this.nOfOrder_Q, nOfOrder_Q8) + '%'
          console.log(this.RetentionRate)

        })
      })
      let unique = [...new Set(numOfStaff)]; // find the number of staff who order last quarter
      this.AvgOrder = this.nOfOrder_Q / unique.length
      var num = Number(this.AvgOrder) // The Number() only visualizes the type and is not needed
      var roundedString = num.toFixed(2);
      this.AvgOrder = Number(roundedString); // toFixed() returns a string (often suitable for printing already)

      //  this.mapComponent.createMap(this.nOfOrder_Q)
    })


  }


}
