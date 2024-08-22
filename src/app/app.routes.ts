import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AcademicsPageComponent } from './components/academics-page/academics-page.component';
import { HeadsOfDepartmentsComponent } from './components/heads-of-departments/heads-of-departments.component';

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
];
