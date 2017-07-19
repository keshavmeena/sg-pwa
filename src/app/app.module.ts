import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
 import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MdlPopoverModule } from '@angular2-mdl-ext/popover';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { LinesituationComponent } from './feature/linesituation/linesituation.component';
import { ROUTES } from './app.route';
import { RlcComponent } from './feature/rlc/rlc.component';
import { ChartModule } from "angular2-highcharts";
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import 'hammerjs';

import '../styles.scss'

export function highchartsFactory() {
      const hc = require('highcharts');
      return hc;
}
declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    LinesituationComponent,
    RlcComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    HttpModule,
    MdlModule,
    MdlPopoverModule,
    MdlSelectModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [{
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
     {
      // hammer instantion with custom config
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig ,
    }
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
