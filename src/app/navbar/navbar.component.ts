import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { NgIf } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, NgIf, PrimeTemplate],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // Lier cette liste au router ?
  protected items = [
    {
      route: '/',
      label: 'Dashboard',
    },
    {
      route: 'devices',
      label: 'Devices',
    },
  ];
}
