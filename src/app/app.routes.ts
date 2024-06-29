import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AcademicsPageComponent } from './components/academics-page/academics-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'academic-programs',
        component: AcademicsPageComponent
      },
];
