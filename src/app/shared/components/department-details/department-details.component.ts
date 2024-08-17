import { Component, input } from '@angular/core';
import { ContentItem } from './department-details.interface';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.scss',
})
export class DepartmentDetailsComponent {
  content = input<ContentItem[]>();
}
