import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linesituation',
  templateUrl: './linesituation.component.html',
  styleUrls: ['./linesituation.component.css'],
})

export class LinesituationComponent implements OnInit {
    optionsTrc: Object;
    optionsTotalGroup: Object;
 public tabIndex= 0;
 SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  swipe(action = this.SWIPE_ACTION.RIGHT){
         
     if (action === this.SWIPE_ACTION.RIGHT) {
      if(this.tabIndex === 0){
        
      }
      else{
        this.tabIndex=this.tabIndex - 1;
      }
     }
      if (action === this.SWIPE_ACTION.LEFT){
          if(this.tabIndex === 2){

          }
          else{
            this.tabIndex++;
          }
      }
  }
 
  constructor() { 
    this.optionsTrc ={
    chart: {
        type: 'column',
      },
       credits: {
      enabled: false
  },
    title: {
        text: '',
        margin:10,
        style:{
            fontSize: "12px"
        }
    },
    xAxis: {
        categories: [
            'Unspecific',
            'LG',
            'LC'
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Price in euro'
        },
    }],
    legend: {
        shadow: false,
        verticalAlign : 'top',
    },
    tooltip: {
        shared: true
    },
   plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },

    series: [{
        name: 'Limit',
        color: 'rgb(165,170,217)',
        data: [150, 200, 20],
        pointPadding: 0.1,
        pointPlacement: 0.2
    }, {
        name: 'Outstanding',
        color: 'rgb(126,86,134)',
        data: [140, 90, 40],
        pointPadding: 0.2,
        pointPlacement: 0.2,
    }]
    };


  this.optionsTotalGroup = {
    chart: {
        type: 'column'
    },
     credits: {
      enabled: false
  },
    title: {
        text: '',
        margin:10,
        style:{
            fontSize: "12px"
        }
    },
    xAxis: {
        categories: [
            'Unspecific',
            'LG',
            'LC'
        ]
    },
    yAxis: [{
        min: 0,
        title: {
            text: 'Price in euro'
        },
    }],
    legend: {
        shadow: false,
        verticalAlign : 'top'
    },
    tooltip: {
        shared: true
    },
   plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },

    series: [{
        name: 'Limit',
        color: 'rgb(250,214,176)',
        data: [150, 200, 1000],
        pointPadding: 0.1,
        pointPlacement: 0.2
    }, {
        name: 'Outstanding',
        color: 'rgb(230,0,40)',
        data: [140, 90, 280],
        pointPadding: 0.2,
        pointPlacement: 0.2,
    }]
    };

  }

  ngOnInit() {
  }

}
