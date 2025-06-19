import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;

   
    if (this.formData.name && this.formData.email && this.formData.message) {
     
      emailjs
        .send(
          'service_ptyea6q', 
          'template_tqrs458', 
          {
            from_name: this.formData.name,
            from_email: this.formData.email,
            message: this.formData.message
          },
          'MPXjhIt_6gEuOlOtV'
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
           
            this.formData = { name: '', email: '', message: '' };
            this.submitted = false;
          },
          (error) => {
            console.error('FAILED...', error);
            alert('Failed to send your message. Please try again later.');
          }
        );
    }
  }
}
