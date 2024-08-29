import { Component } from '@angular/core';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ContactContentCardComponent } from './components/contact-content-card/contact-content-card.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    InputFieldComponent,
    ContactContentCardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    if (this.formIsValid()) {
      alert('Message was sent successfully!');
      console.log(this.form.value);
    } else {
      alert('Form is not valid!');
    }
  }

  formIsValid() {
    return this.form.valid;
  }
}
