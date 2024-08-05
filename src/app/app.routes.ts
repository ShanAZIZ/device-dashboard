import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DevicesComponent} from "./devices/devices.component";

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'devices', component: DevicesComponent },
];
