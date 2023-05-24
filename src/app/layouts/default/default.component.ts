import { Component, OnInit } from '@angular/core';

export declare const Breakpoints: {
  XSmall: string;
  Small: string;
  Medium: string;
  Large: string;
  XLarge: string;
  Handset: string;
  Tablet: string;
  Web: string;
  HandsetPortrait: string;
  TabletPortrait: string;
  WebPortrait: string;
  HandsetLandscape: string;
  TabletLandscape: string;
  WebLandscape: string;
};

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
