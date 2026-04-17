import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common'
import { Search } from "./search/search";

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, Search],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header implements OnInit {
 displayEmail: string = 'Đang tải...'; 

  constructor(private userService: User,
    private cd: ChangeDetectorRef)
    {}

  ngOnInit() {
    this.fetchUserInfo();
  }

 fetchUserInfo() {
  console.log('Đang gọi API...'); // Log 1
  this.userService.getUser().subscribe({
    next: (res: any) => {
      console.log('Dữ liệu về rồi:', res); // Log 2
      if (res.logged_in) {
        this.displayEmail = res.user; 
      }

       this.cd.detectChanges(); 
    },
    error: (err) => {
      console.error('Lỗi API:', err); // Log 3
    }
  });
}

}
