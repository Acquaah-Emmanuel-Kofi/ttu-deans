import { Component } from '@angular/core';
import { QuickLinks } from './footer.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public quickLinks: QuickLinks[] = [
      {
        label: 'Acadamc Calendar',
        link: 'https://ttu.edu.gh/academic-calendar-20222023/'
      },
      {
        label: 'University Library',
        link: 'https://ttu.edu.gh/academic-calendar-20222023/'
      },
      {
        label: 'Faculties and Departments',
        link: 'https://ttu.edu.gh/academic-calendar-20222023/'
      },
      {
        label: 'Student Resources',
        link: 'https://ttu.edu.gh/academic-calendar-20222023/'
      },
      {
        label: 'Student Resources Centre',
        link: 'https://ttu.edu.gh/academic-calendar-20222023/'
      },
      {
        label: 'Alumni',
        link: 'https://ttu.edu.gh/academic-calendar-20222023/'
      },
    ];
}
