import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    email: 'deepakselvakumar07@gmail.com',
    phone: '+91 9500190463',
    location: 'Chennai, India'
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSending = false;
  sendStatus = '';

  async onSubmit() {
  // Validate form
  if (!this.formData.name || !this.formData.email || !this.formData.message) {
    this.sendStatus = 'Please fill in all fields';
    return;
  }

  this.isSending = true;
  this.sendStatus = 'Sending...';

  const payload = {
    lib_version: '4.4.1',
    user_id: 'QwlqfR-IAISNHjclo',
    service_id: 'service_uy7nflj',
    template_id: 'template_262cp0b',
    template_params: {
      name: this.formData.name,
      message: this.formData.message,
      email: this.formData.email
    }
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      this.sendStatus = 'Message sent successfully!';
      this.formData = { name: '', email: '', message: '' };
    } else {
      this.sendStatus = 'Failed to send message. Please try again.';
    }
  } catch (error) {
    console.error('Error sending email:', error);
    this.sendStatus = 'An error occurred. Please try again later.';
  } finally {
    this.isSending = false;
  }
}

}