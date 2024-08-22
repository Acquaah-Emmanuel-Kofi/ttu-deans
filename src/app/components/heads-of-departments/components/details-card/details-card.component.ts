import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.scss',
})
export class DetailsCardComponent {
  id = input.required<number>();
  logo = input.required<string>();
  name = input.required<string>();
  email = input.required<string>();
  faculty = input.required<string>();
  department = input.required<string>();
}
