import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  imports: [MatFormFieldModule,MatInputModule,MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
