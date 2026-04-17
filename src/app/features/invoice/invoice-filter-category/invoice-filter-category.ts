import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatFormField } from "@angular/material/form-field";
import { MatSelect, MatOption } from "@angular/material/select";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-invoice-filter-category',
  imports: [MatIcon, MatFormField, MatSelect, MatOption,FormsModule],
  templateUrl: './invoice-filter-category.html',
  styleUrl: './invoice-filter-category.scss',
})
export class InvoiceFilterCategory {
  category = '';
	categories: string[] = ['food', 'travel', 'medical', 'None', 'other'];

	@Output() filterChanged = new EventEmitter<string>();

	onSelectionChange() {
		this.filterChanged.emit(this.category);
	}

	reset() {
		this.category = '';
	}
}
