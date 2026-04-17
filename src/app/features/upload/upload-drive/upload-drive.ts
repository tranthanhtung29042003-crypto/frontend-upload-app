import { Component, OnInit } from '@angular/core';
import { DriveStore } from '../../../services/drive-store';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-upload-drive',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './upload-drive.html',
  styleUrl: './upload-drive.scss',
})
export class UploadDrive implements OnInit {

  storage: any = null;

  constructor(
  private driveService: DriveStore,
  private cd: ChangeDetectorRef
) {}

  ngOnInit(): void {
  this.driveService.getDriveInfomation().subscribe((data: any) => {
    const used = Number(data.usage || 0);
    const total = Number(data.limit || 0);

    this.storage = {
      usedGB: this.toGB(used),
      totalGB: this.toGB(total),
      percent: total > 0 ? (used / total) * 100 : 0
    };

    this.cd.detectChanges(); 
  });
}

  toGB(bytes: number): number {
    return +(bytes / (1024 ** 3)).toFixed(2);
  }
}