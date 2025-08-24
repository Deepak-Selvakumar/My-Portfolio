import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    // Form submission logic would go here
    console.log("Form submission logic would go here");
  }
}