import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
  ngOnInit(): void {
    // reloadScripts()

    this.barChartData = {
      labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
      ]
    };
  }
}
