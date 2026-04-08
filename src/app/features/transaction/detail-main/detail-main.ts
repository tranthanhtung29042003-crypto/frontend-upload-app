import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for | number pipe
import { Invoice } from '../../../core/model/transaction.model';

@Component({
  selector: 'app-detail-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-main.html',
  styleUrl: './detail-main.scss',
})
export class DetailMain {
  // Using the modern Signal-based input
  invoice = input.required<Invoice>();
}