import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface DriveStorage {
  limit: number;
  usage: number;

}

@Injectable({
  providedIn: 'root',
})


export class DriveStore {
   constructor(private http: HttpClient) {}

  getDriveInfomation() {
    return this.http.get<DriveStorage>('api/drivestore-info/',
      {
    withCredentials: true
  }
    );
  }
}
