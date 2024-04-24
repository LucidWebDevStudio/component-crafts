import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-bottom-navbar',
  templateUrl: 'bottom-navbar.component.html',
  styleUrl: 'bottom-navbar.component.scss',
})
export class BottomNavbarComponent {}
