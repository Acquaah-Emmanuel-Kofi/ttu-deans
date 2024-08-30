import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AcademicsPageComponent } from './components/academics-page/academics-page.component';
import { HeadsOfDepartmentsComponent } from './components/heads-of-departments/heads-of-departments.component';
import { DepartmentDetailsComponent } from './shared/components/department-details/department-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { FacultyDeansComponent } from './components/faculty-deans/faculty-deans.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'academic-programs',
    component: AcademicsPageComponent,
  },
  {
    path: 'heads-of-departments',
    component: HeadsOfDepartmentsComponent,
  },
  {
    path: 'department-details/:id',
    component: DepartmentDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'faculty-deans',
    component: FacultyDeansComponent,
  },
];
