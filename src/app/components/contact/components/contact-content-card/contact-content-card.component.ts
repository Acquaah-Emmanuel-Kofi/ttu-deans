import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact-content-card',
  standalone: true,
  imports: [],
  templateUrl: './contact-content-card.component.html',
  styleUrl: './contact-content-card.component.scss',
})
export class ContactContentCardComponent {
  label = input.required<string>();
  iconSrc = input.required<string>();
  ref = input<string>();
}
