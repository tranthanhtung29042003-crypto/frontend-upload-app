import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: 'app-invoice-filter-datefrom',
	standalone: true,
	imports: [
		MatIconModule, 
		MatFormFieldModule, 
		MatInputModule, 
		MatDatepickerModule, 
		MatNativeDateModule, 
		FormsModule
	],
	templateUrl: './invoice-filter-datefrom.html',
	styleUrl: './invoice-filter-datefrom.scss',
})
export class InvoiceFilterDatefrom {
	dateValue: Date | null = null;

	@Output() filterChanged = new EventEmitter<string | null>();

	onDateChange() {
		if (this.dateValue) {
			const year = this.dateValue.getFullYear();
			const month = ('0' + (this.dateValue.getMonth() + 1)).slice(-2);
			const day = ('0' + this.dateValue.getDate()).slice(-2);
			const formattedDate = `${year}-${month}-${day}`;
			this.filterChanged.emit(formattedDate);
		} else {
			this.filterChanged.emit(null);
		}
	}

	reset() {
		this.dateValue = null;
	}
}