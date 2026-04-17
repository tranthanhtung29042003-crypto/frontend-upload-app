import { Component, ViewChild } from '@angular/core';
import { InvoicesServices } from '../../../services/invoices';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { InvoiceFilterCategory } from "../invoice-filter-category/invoice-filter-category";

import { InvoiceFilterDatefrom } from "../invoice-filter-datefrom/invoice-filter-datefrom";
import { InvoiceFilterDateto } from "../invoice-filter-dateto/invoice-filter-dateto";


@Component({
  selector: 'app-invoice-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    InvoiceFilterCategory,
    
    InvoiceFilterDatefrom,
    InvoiceFilterDateto
],
  templateUrl: './invoice-filters.html',
  styleUrls: ['./invoice-filters.scss']
})
export class InvoiceFilters {

  @ViewChild(InvoiceFilterCategory) categoryComp!: InvoiceFilterCategory;
  @ViewChild(InvoiceFilterDatefrom) dateFromComp! :InvoiceFilterDatefrom;
  @ViewChild(InvoiceFilterDatefrom) dateToComp! :InvoiceFilterDateto;
	private currentFilters = {
		category: '',
		date_from: null as string | null,
		date_to: null as string | null
	};

	constructor(private invoiceServices: InvoicesServices) {}

	onCategoryChange(category: string) {
		this.currentFilters.category = category;
		this.applyFilters();
	}

  onDateFromChange(date: string | null) {
		this.currentFilters.date_from = date;
		this.applyFilters();
	}

  onDateToChange(date: string | null) {
		this.currentFilters.date_to = date;
		this.applyFilters();
	}

	applyFilters() {
	
		const filtersToSend = Object.fromEntries(
			Object.entries(this.currentFilters).filter(([_, v]) => v !== null && v !== '')
		);
		
		this.invoiceServices.setFilters(filtersToSend);
	}

	resetAll() {
		this.categoryComp.reset();
		this.dateFromComp.reset();
		this.dateToComp.reset();
		
		this.currentFilters = {
			category: '',
			date_from: null,
			date_to: null
		};
		
		this.invoiceServices.setFilters({});
	}
}