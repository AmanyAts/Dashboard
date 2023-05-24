import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../../details/details.component';
import * as Highcharts from "highcharts";
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  className1 = 'details_card' // to activate css design (Details)
  Highcharts = Highcharts;
  chartOptions = {};
  newDate: any[] = []
  counts: any = {};
  isLoaded: boolean = false

  //constructor(private details: DetailsComponent) { }
  constructor() { }

  ngOnInit() {
    // this.createPiechart()
    // this.createPiechart()
  }

  createPiechart(info: any) {
    this.isLoaded = true
    this.chartOptions =
    {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 300,
        width: 300,
      },
      title: {
        text: 'Order Status / month',
        style: {
          fontSize: '18px',
          fontFamily: 'system-ui',
          fontWeight: '500',
          fontstyle: 'Bold',
          lineHeight: '27px',
          color: '#86858bcf'
        }

      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },

      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },

      series: [{
        name: 'Status',
        colorByPoint: true,
        data: info
      }]
    }

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);

  }

}


