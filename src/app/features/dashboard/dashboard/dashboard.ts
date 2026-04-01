import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SpendingChart } from "../spending-chart/spending-chart";
import { QuickActions } from "../quick-actions/quick-actions";
import { RecentInvoices } from "../recent-invoices/recent-invoices";

@Component({
  selector: 'app-dashboard',
  imports: [MatIcon, SpendingChart, QuickActions, RecentInvoices],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
