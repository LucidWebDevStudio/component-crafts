import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserCardComponentComponent } from './components/user-card/user-card.component';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
import { DataListComponent } from './components/data-list/data-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserCardComponentComponent,
    BottomNavbarComponent,
    DataListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'component-crafts';
}
