import { Component, OnInit, signal } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { headsOfDepartment } from '../../../assets/data.json';
import { IHeadsOfDepartment } from './heads-of-departments.interface';
@Component({
  selector: 'app-heads-of-departments',
  standalone: true,
  imports: [PageTitleComponent, DetailsCardComponent],
  templateUrl: './heads-of-departments.component.html',
  styleUrl: './heads-of-departments.component.scss',
})
export class HeadsOfDepartmentsComponent implements OnInit {
  title: string = 'Heads of Department';

  headsOfDepartmentData = signal<IHeadsOfDepartment[]>([]);

  ngOnInit(): void {
    this.headsOfDepartmentData.set(headsOfDepartment);
  }
}
