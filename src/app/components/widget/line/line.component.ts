import { Component, OnInit } from '@angular/core';
import { databaseInstance$ } from '@angular/fire/database';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { MerchantService } from 'src/app/services/merchant/merchant.service';

@Component({
    selector: 'app-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
    className1 = 'details_card' // to activate css design (Details)
    Highcharts = Highcharts;
    chartOptions = {};
    chartOptions2 = {} // for sales
    newDate: any[] = []
    counts: any = {};// order per month
    sales: any = {}//
    salesCount: any[] = [] //sales per month
    isLoaded: boolean = false // to prevent chart from loading before data
    isSales: boolean = false // to check the incoming data

    constructor(private merchant: MerchantService) { }

    ngOnInit(): void {
        // Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar
    }


    creatChart(info: any[], flag: boolean, title: string, name: string) {

        this.isLoaded = true
        let Optionss = {}




        const da = info


        Optionss = {
            chart: {

                height: 300,
                width: 300,
                type: 'column',
            },
            title: {
                align: 'left',
                text: title,
                style: {
                    fontSize: '18px',
                    fontFamily: 'system-ui',
                    fontWeight: '500',
                    fontstyle: 'Bold',
                    lineHeight: '27px',
                    color: '#86858bcf'
                }
            },
            xAxis: {
                type: 'category',
                categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
            },
            yAxis: {
                floor: 0,
                ceiling: 100,
            },
            legend: {
                enabled: false,

            },

            tooltip: {
                headerFormat: '<span style="font-size:7px">{series.name}</span><br>',
            },
            series: [
                {
                    name: name,
                    data: da
                },

            ]
        }

        if (flag) {

            this.isSales = true

            this.chartOptions2 = Optionss

        } else {

            this.chartOptions = Optionss

        }

        HC_exporting(Highcharts);

        setTimeout(() => {
            window.dispatchEvent(
                new Event('resize')
            );
        }, 300);


    }


}
