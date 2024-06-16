import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { IHeroCards } from './homepage.interface';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, AboutComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
    public heroCards: IHeroCards[] = [
      {
        title: 'Faculty Deans',
        iconSrc: '../assets/icons/faculty.svg',
      },
      {
        title: 'Heads of  Departments',
        iconSrc: '../assets/icons/department.svg',
      },
      {
        title: 'Academic Programs, Faculty and Departments',
        iconSrc: '../assets/icons/programs.svg',
      }
    ];
}
