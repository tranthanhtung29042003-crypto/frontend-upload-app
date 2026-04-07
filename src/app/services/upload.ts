import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Upload {

  constructor(private http: HttpClient) { }

  uploadImvoices(files: File[]) {
    const formData = new FormData();

    files.forEach(
      files => {
        formData.append('images', files, files.name);
      }
    );

    return this.http.post('/api/upload', formData, {
      withCredentials: true
    }
    );
  }
}
