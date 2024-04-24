import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-data-list',
  templateUrl: 'data-list.component.html',
  styleUrl: 'data-list.component.scss',
})
export class DataListComponent {
  listItems = [
    {
      key: '@lucidWebDevStudio/lorem',
      value: 'My Core data and UI components package',
    },
    {
      key: '@lucidWebDevStudio/ipsum',
      value: 'My Core data and UI components package',
    },
    {
      key: '@lucidWebDevStudio/dolor',
      value: 'My Core data and UI components package',
    },
  ];
}
