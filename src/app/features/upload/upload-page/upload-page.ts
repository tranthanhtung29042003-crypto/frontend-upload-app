import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Thêm để dùng pipe/directive cũ nếu cần
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; // Thêm cho nút bấm
import { UploadView } from "../upload-view/upload-view";
import { Upload } from '../../../services/upload';
import { UploadTips } from "../upload-tips/upload-tips";
import { DriveStore } from '../../../services/drive-store';
import { UploadDrive } from "../upload-drive/upload-drive";

@Component({
  selector: 'app-upload-page',
  standalone: true,
  // Thêm đầy đủ module vào imports
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    UploadView,
    UploadTips,
    UploadDrive
  ],
  templateUrl: './upload-page.html',
  styleUrl: './upload-page.scss',
})
export class UploadPage {
  selectedFiles: File[] = [];
  isUploading = false;
  uploadResults: any = null;

  constructor(private invoiceService: Upload, private driveInfoService: DriveStore,

    private cd: ChangeDetectorRef
  ) { }

  getDriveStoreInfo() {
    this.driveInfoService.getDriveInfomation()
    console.log(this.driveInfoService.getDriveInfomation())
  }

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
    // Đã bỏ tự động upload để chờ nhấn nút START EXTRACTION
    if (this.selectedFiles.length > 0) {
      this.startUpload(); // ✅ auto gọi luôn
    }
  }

  onFileDropped(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.selectedFiles = Array.from(event.dataTransfer.files);
    }
    if (this.selectedFiles.length > 0) {
      this.startUpload();
    }
  }


  startUpload() {
    if (this.selectedFiles.length === 0) return;

    this.isUploading = true;

    // 👇 Hiển thị trước (pending)
    this.uploadResults = this.selectedFiles.map(file => ({
      file: file.name,
      status: 'PROCESSING',
      vendor: null,
      total: 0,
      items: [],
      error: null,
      image: null
    }));

    this.invoiceService.uploadImvoices(this.selectedFiles).subscribe({
      next: (res: any) => {
        console.log("Dữ liệu server trả về:", res);
        const txId = res.transaction?.transaction_id;
        this.uploadResults = (res.transaction?.invoices || []).map((inv: any) => ({
          file: inv.file,
          status: inv.status, // OK | ERROR
          vendor: inv.vendor_name || null,
          total: inv.total || 0,
          items: inv.items || [],
          error: inv.message || null,
          transaction_id: txId,
          image: inv.image_link || null


        }

        ));
        console.log("uploadresul: ", this.uploadResults);
        this.isUploading = false;
        this.selectedFiles = [];
        this.cd.detectChanges();
      },
      error: () => {
        this.isUploading = false;
      }
      
    });
  }

  handleUploadClick(event: Event) {
    event.stopPropagation(); // Chặn không cho click lan ra Dropzone
    event.preventDefault();
    if (this.selectedFiles.length > 0) {
      this.startUpload();
    }
  }

  removeFile(index: number, event: Event) {
    // Ngăn chặn sự kiện click lan ra ngoài làm mở hộp thoại chọn file
    event.stopPropagation();

    // Xóa file tại vị trí index
    this.selectedFiles.splice(index, 1);

    // Nếu xóa hết file, có thể reset luôn kết quả cũ nếu muốn
    if (this.selectedFiles.length === 0) {
      this.uploadResults = null;
    }
  }
}