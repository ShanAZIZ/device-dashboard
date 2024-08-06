import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Device, HalPaginatedDevice } from '../shared/types';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http
      .get<HalPaginatedDevice>(`http://localhost:8080/device`)
      .pipe(map((halDevice: HalPaginatedDevice) => halDevice._embedded.device));
  }
}
