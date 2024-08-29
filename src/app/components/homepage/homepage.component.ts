import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { IHeroCards } from './homepage.interface';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  public heroCards: IHeroCards[] = [
    {
      title: 'Faculty Deans',
      iconSrc: '../assets/icons/faculty.svg',
      link: 'faculty-deans',
    },
    {
      title: 'Head of  Departments',
      iconSrc: '../assets/icons/department.svg',
      link: 'heads-of-departments',
    },
    {
      title: 'Academic Programmes',
      iconSrc: '../assets/icons/programs.svg',
      link: 'academic-programs',
    },
  ];
}
