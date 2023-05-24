import { Component, HostBinding, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() title = ''; // decorate the property with @Input()
  @Input() num:any
  @Input() DetailsClass='' // a class only for details comp- to change card size
  @Input() icon = '';

  constructor() { }

  ngOnInit() {
   

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );     
    }, 300);
  }

}
