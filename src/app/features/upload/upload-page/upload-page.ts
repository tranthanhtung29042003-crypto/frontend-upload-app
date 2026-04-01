import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIcon } from '@angular/material/icon';
import { UploadView } from "../upload-view/upload-view";
@Component({
  selector: 'app-upload-page',
  imports: [MatProgressBarModule, MatIcon, UploadView],
  templateUrl: './upload-page.html',
  styleUrl: './upload-page.scss',
})
export class UploadPage {}
