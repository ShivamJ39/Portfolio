import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add necessary imports
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
    event.preventDefault(); // Prevent the default form submission behavior
    this.submitted = true;

    // Check if all fields are filled
    if (this.formData.name && this.formData.email && this.formData.message) {
      // Send email using EmailJS
      emailjs
        .send(
          'service_ptyea6q', // Replace with your EmailJS Service ID
          'template_tqrs458', // Replace with your EmailJS Template ID
          {
            from_name: this.formData.name,
            from_email: this.formData.email,
            message: this.formData.message
          },
          'MPXjhIt_6gEuOlOtV' // Replace with your EmailJS Public Key
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
            // Reset the form and submitted flag
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
