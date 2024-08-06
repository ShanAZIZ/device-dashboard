import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';
import { Device } from '../shared/types';
import { DeviceService } from './device.service';
import { AsyncPipe } from '@angular/common';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [TableModule, AsyncPipe, Button],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css',
})
export class DevicesComponent implements OnInit {
  devices$!: Observable<Device[]>; // WHY $ (observable or ?)?

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.devices$ = this.deviceService.getDevices();
  }
}
