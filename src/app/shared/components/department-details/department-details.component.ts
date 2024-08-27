import { Component, inject, OnInit, signal } from '@angular/core';
import { IDepartmentDetails } from './department-details.interface';
import { PageTitleComponent } from '../page-title/page-title.component';
import { departmentDetails } from '../../../../assets/data.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.scss',
})
export class DepartmentDetailsComponent implements OnInit {
  detail = signal<IDepartmentDetails>({} as IDepartmentDetails);

  private _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.fetchData(Number(id));
      }
    });
  }

  fetchData(id: number): void {
    const data = departmentDetails.find((data) => data.id === id);
    if (data) {
      this.detail.set(data);
    }
  }

  goalIsArry(): boolean {
    return Array.isArray(this.detail().goals);
  }

  objectivesIsArray(): boolean {
    return Array.isArray(this.detail().objectives);
  }
}
