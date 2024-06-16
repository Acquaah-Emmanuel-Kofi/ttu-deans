import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavlinks } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    public navlinks: INavlinks[] = [
      {
        label: 'Home',
        link: '/'
      },
      {
        label: 'News',
        link: '/news'
      },
      {
        label: 'Contact',
        link: '/'
      },
    ];
}
