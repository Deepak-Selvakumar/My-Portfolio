import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  timelineEvents: TimelineEvent[] = [
    {
      year: "2024",
      title: "EUREKA",
      description: "A breakthrough project that revolutionized the industry with innovative solutions."
    },
    {
      year: "2023 - 2024",
      title: "Advanced Development",
      description: "Worked on cutting-edge technologies and contributed to major projects."
    },
    {
      year: "2017 - 2022",
      title: "Professional Growth",
      description: "Developed skills in various technologies and delivered successful projects."
    }
  ];

  addEvent() {
    // This would typically open a form to add a new event
    console.log("Add new event functionality would go here");
  }
}