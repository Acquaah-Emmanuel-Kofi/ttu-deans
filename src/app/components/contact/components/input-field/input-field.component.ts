import { Component, input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  label = input<string>();
  type = input<string>('text');
  placeholder = input<string>();
  control = input.required<FormControl | AbstractControl | any>();
  disabled = input<boolean>(false);
  required = input<boolean>(false);
  id = input<string>();

  get controlIsRequired() {
    return (
      this.control().hasError('required') &&
      this.control().touched &&
      this.control().invalid
    );
  }

  get controlHasMinLengthError() {
    return (
      this.control().hasError('minlength') &&
      this.control().touched &&
      this.control().invalid
    );
  }

  get controlHasEmailError() {
    return (
      this.control().hasError('email') &&
      this.control().touched &&
      this.control().invalid
    );
  }
}
