import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchService } from '../../../services/search';
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-search',
  imports: [MatIcon],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit {
  searchTerm = new Subject<string>();
  results: any[] = [];
  loading = false;
  showResults = false;
  constructor(private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchTerm.pipe(
      debounceTime(400),              // ⏱️ delay 400ms
      distinctUntilChanged(),         // không gọi lại nếu giống
      switchMap(term => {
        this.loading = true;
        return this.searchService.search(term);
      })
    ).subscribe(res => {
      this.results = res.results || [];
      this.loading = false;
    });
  }

  onSearch(value: string) {
     if (!value.trim()) {
    this.results = [];
    this.showResults = false;
    return;
  }

  this.showResults = true;
  this.searchTerm.next(value);
  }
}
