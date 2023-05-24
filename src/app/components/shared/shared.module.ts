import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from '../summary/summary.component';
import { DetailsComponent } from '../details/details.component';
import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from '../cards/cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PieComponent } from '../widget/pie/pie.component';
import { LineComponent } from '../widget/line/line.component';
import { MapComponent } from '../widget/map/map.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DataComponent } from '../widget/data/data.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    SummaryComponent,
    DetailsComponent,
    CardsComponent,
    PieComponent,
    LineComponent,
    MapComponent,
    DataComponent
  ],
  
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    HighchartsChartModule,
    MatIconModule
    
    
  ],
  providers:[LineComponent,DataComponent,PieComponent,MapComponent],
  exports:[
    SummaryComponent,
    DetailsComponent,
    CardsComponent,
    PieComponent,DataComponent
  ]
})
export class SharedModule { }
