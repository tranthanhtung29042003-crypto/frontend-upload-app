import { Component, OnInit, signal } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { Infomation } from '../../../services/infomation';

@Component({
  selector: 'app-spending-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './spending-chart.html',
  styleUrl: './spending-chart.scss',
})
export class SpendingChart implements OnInit {
private readonly CHART_COLORS = ['#3f51b5', '#4fc3f7', '#8d4e0e', '#e8eaed'];

  // Khởi tạo dữ liệu dưới dạng Signal
  public barChartData = signal<ChartData<'bar'>>({
    labels: [],
    datasets: [
      { data: [], label: 'FOOD', backgroundColor: '#7986cb', borderRadius: 10, barThickness: 40 },
      { data: [], label: 'OTHER', backgroundColor: '#e8eaed', borderRadius: 10, barThickness: 40 }
    ]
  })

   public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: { stacked: true, grid: { display: false } },
      y: { display: false }
    }
  };


  public doughnutOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  public doughnutData = signal<ChartData<'doughnut'>>({
    labels: ['Food', 'Other', 'Medical', 'Travel'],
    datasets: [{ data: [0, 0, 0, 0], backgroundColor: this.CHART_COLORS, borderWidth: 0 }]
  });

 

  constructor(private service: Infomation) {}

ngOnInit(): void {
    this.service.getInvoiceSumary().subscribe({
      next: (res: any) => {
        // Dùng setTimeout để đẩy việc cập nhật sang chu kỳ render kế tiếp
        setTimeout(() => {
          this.barChartData.set({
            labels: res.weeks,
            datasets: [
              { data: res.food, label: 'FOOD', backgroundColor: '#7986cb', borderRadius: 10, barThickness: 40 },
              { data: res.other, label: 'OTHER', backgroundColor: '#e8eaed', borderRadius: 10, barThickness: 40 }
            ]
          });

          this.doughnutData.set({
            labels: ['Food', 'Other', 'Medical', 'Travel'],
            datasets: [{
              data: [res.total_food, res.total_other, res.total_medical, res.total_travel],
              backgroundColor: this.CHART_COLORS,
              borderWidth: 0
            }]
          });
        }, 0);
      },
      error: (err) => console.error('API error:', err)
    });
  }

 
  getChartColor(index: number): string {
    return this.CHART_COLORS[index] || '#ccc';
  }

  calculatePercentage(index: number): number {
    const data = this.doughnutData().datasets[0].data as number[];
    if (!data || data.length === 0) return 0;
    
    const total = data.reduce((acc, val) => acc + (val || 0), 0);
    return total === 0 ? 0 : Math.round((data[index] / total) * 100);
  }
}