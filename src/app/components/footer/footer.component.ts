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
        label: 'Home',
        link: '/'
      },
      {
        label: 'News',
        link: '/news'
      },
      {
        label: 'Contacts',
        link: '/contacts'
      },
    ];
}
