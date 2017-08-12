import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() data:Array<any>;
  @Input() chartType:string;
  @Input() dataProp:string;
  @Input() labelsProp:string;
  
  
  chartData:Array<{'data':Array<number>, 'label':string}> = [];
  chartDataValues:Array<number> = [];
  chartLabels:Array<string> = [];
  lineChartLegend:boolean = true; 
  
  constructor() {

  }

  ngOnInit() {
    console.log(this.data);
    console.log(this.chartType);
    console.log(this.dataProp);
    console.log(this.labelsProp);
    for(let i = 0; i < this.data.length; i++){

      console.log(this.data[i][this.dataProp]);
      console.log(this.data[i][this.labelsProp]);

      this.chartDataValues.push(this.data[i][this.dataProp]);
      this.chartLabels.push(this.data[i][this.labelsProp]);

      

    }

    
    this.chartData.push({'data':this.chartDataValues, 'label':this.dataProp});
    console.log(this.chartDataValues);
    console.log(this.chartLabels);
    console.log(this.chartData);
  }

  public lineChartOptions:any = {
    responsive: true,
    legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 255, 255)'
            }
    },
    scales: {
          xAxes: [{
            ticks: {
              fontColor:'#fff',
            },
            gridLines: {
              color: 'rgba(171,171,171,1)',
              lineWidth: 1,
              display:false
            },
            
          }],
          yAxes: [{
            ticks: {
              fontColor:'#fff',
            },
            gridLines: {
              color: 'rgba(171,171,171,1)',
              lineWidth: 1,
              display:false
            },
            
          }]
    }      

  };
  public lineChartColors:Array<any> = [
    
    { // dark grey
      backgroundColor: 'rgba(0,0,0,0.4)',
      borderColor: '#ff8c00',
      pointBackgroundColor: 'rgba(77,83,96,0)',
      pointBorderColor: 'rgba(77,83,96,0)',
      pointHoverBackgroundColor: 'rgba(77,83,96,0)',
      pointHoverBorderColor: 'rgba(77,83,96,0)'
    }
  ];
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
