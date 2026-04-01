import { Component } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
@Component({
  selector: 'app-spending-chart',
  imports: [BaseChartDirective],
  templateUrl: './spending-chart.html',
  styleUrl: './spending-chart.scss',
})
export class SpendingChart {
public barChartData: ChartData<'bar'> = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [
      { 
        data: [40, 50, 60, 80, 70, 90], 
        label: 'ACTUAL', 
        backgroundColor: '#7986cb', // Màu tím nhạt
        borderRadius: 10, // Bo tròn đầu cột
        barThickness: 40
      },
      { 
        data: [50, 60, 70, 90, 85, 100], 
        label: 'PROJECTED', 
        backgroundColor: '#e8eaed', // Màu xám nhạt (cột phía sau)
        borderRadius: 10,
        barThickness: 40
      }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: { stacked: true, grid: { display: false } }, // Bỏ lưới dọc
      y: { stacked: false, display: false } // Bỏ trục Y để giống mẫu
    }
  };

  // 2. Cấu hình Doughnut Chart (Categories)
  public doughnutData: ChartData<'doughnut'> = {
    labels: ['SaaS', 'Infra', 'Marketing'],
    datasets: [{
      data: [45, 25, 30],
      backgroundColor: ['#3f51b5', '#4fc3f7', '#8d4e0e'],
      borderWidth: 0,
      
 
    }]
  };

  public doughnutOptions: ChartConfiguration['options'] = {
  responsive: true,

  plugins: {
    legend: { display: false }
  }
};  
}
