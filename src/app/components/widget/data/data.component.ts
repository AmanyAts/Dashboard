import { Component, OnInit } from '@angular/core';
import { MerchantService } from 'src/app/services/merchant/merchant.service';
import { LineComponent } from '../line/line.component'
import { PieComponent } from '../pie/pie.component'


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
   months: any[] =[]
   sales:any={}//
  status:any[]=[]
  counts_status:any={}
   salesCount:any[]=[] //sales per month
   isSales:boolean= false
   
  constructor(private merchant:MerchantService, private lineComponent: LineComponent , private pieComponent: PieComponent) { }

  ngOnInit(): void {
        this.findData()

  }

  getYTD() {
    var oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() - 1);
    return oneYearFromNow
  }

  getQuarterly(num:any){
    var d = new Date();
    d.setMonth(d.getMonth() -num);
    return new Date(d.toLocaleDateString())
  }

  convertDate(num:any){
    const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const d = new Date(num);
    let name = month[d.getMonth()];
    return name
  }

  salesAmount( res:any ){
    const SalesData:any[]=[]
    for(let key in res){
        let x =res[key].receive_date      
        let name = this.convertDate(x) // to get month name
        let total= res[key].total_price //getting total price for each order    

     // using sales object to group by month (month+total)
        if(this.sales.hasOwnProperty(name)){
          this.sales[name]=this.sales[name]+total
        }else{
          this.sales[name] = total;
        }

    for(let month in this.sales){
      SalesData.push({name:month,y:this.sales[month]})
     }
     this.months.push(name);
     
     this.status.push(res[key].status)
    }
    return SalesData
  }

  counter(values:any){
   const counts :any = {};// order per month
   const countsResaults:any=[]
    values.forEach( (x:any) => { counts[x] = (counts[x] || 0) + 1; });
    for(let key in counts){
      countsResaults.push({name:key,y:counts[key]})
  }
  return countsResaults
  }


  findData(){
    let numOfOrders: any[]=[]
    let order_status:any[]=[]
    let cloneObj:any
    let SalesData1:any[]=[]

// call API
  this.merchant.getMerchantData('Bon Cafe').subscribe(res=>{
        cloneObj= res.Order

        for(let key in cloneObj){
          //this to delete the order before one year
          let d =new Date(cloneObj[key].receive_date)
          if(d< this.getYTD()){
          delete cloneObj[key]
          }
        }

        SalesData1= this.salesAmount(cloneObj)  // first_chart
        console.log(SalesData1)
        numOfOrders= this.counter(this.months) // second chart
        console.log(numOfOrders)
        order_status= this.counter(this.status) // pie chart

      this.lineComponent.creatChart(numOfOrders,false, 'Total number of order (monthly)','Order')
      
      this.lineComponent.creatChart(SalesData1,true,'Total sales Amount','Amount')
     this.pieComponent.createPiechart(order_status)
  

      })

  


}

}
