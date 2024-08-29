import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';

@Component({
  selector: 'app-faculty-deans',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './faculty-deans.component.html',
  styleUrl: './faculty-deans.component.scss',
})
export class FacultyDeansComponent {
  title: string = 'Faculty Deans';
}
