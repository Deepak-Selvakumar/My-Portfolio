import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  category: string;
  year: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
     {
      id: 1,
      title: 'Fee Nix - Billing System',
      description: 'A Finance Billing Sftware for Schools and Colleges to manage student fees, generate invoices, and track payments efficiently.',
      technologies: ['Angular', 'C#', 'Sql Server','ASP.Net MVC'],
      imageUrl: 'https://placehold.co/600x400/3498db/white?text=Fee Nix - Billing System',
      projectUrl: 'https://github.com/Deepak-Selvakumar/FeeNix-Elite-Billing-System',
      githubUrl: 'https://github.com/Deepak-Selvakumar/FeeNix-Elite-Billing-System',
      category: 'Web Application',
      year: '2025'
    },
    {
      id: 2,
      title: 'Crypto Currency Tracker',
      description: 'A cryptocurrency tracker with real-time data integration, interactive charts, and a favorite feature',
      technologies: ['React', 'Java', 'Spring Boot', 'My Sql'],
      imageUrl: 'https://placehold.co/600x400/2ecc71/white?text=Crypto Currency Tracker',
      projectUrl: 'https://github.com/Deepak-Selvakumar/Crypto-Tracker',
      githubUrl: 'https://github.com/Deepak-Selvakumar/Crypto-Tracker',
      category: 'Web Application',
      year: '2024'
    },
    {
      id: 3,
      title: 'Health Care Management System',
      description: 'A comprehensive health care management system for hospitals to manage Employee Records',
      technologies: ['React', 'Java', 'Spring Boot', 'My Sql'],
      imageUrl: 'https://placehold.co/600x400/e74c3c/white?text=Health Care Management System',
      projectUrl: 'https://github.com/Deepak-Selvakumar/Hospital-Staff-Management-System',
      githubUrl: 'https://github.com/Deepak-Selvakumar/Hospital-Staff-Management-System',
      category: 'Web Application',
      year: '2024'
    },
    {
      id: 4,
      title: 'Student Management System',
      description: 'Created a responsive and interactive platform for managing student enrollments. Integrated SAP Crystal Reports for printing student ID cards and report cards',
      technologies: ['Vue.js', 'Java', 'MySQL', 'Stripe API'],
      imageUrl: 'https://placehold.co/600x400/9b59b6/white?text=Student Management System',
      projectUrl: 'https://github.com/Deepak-Selvakumar/Student-Management-System',
      githubUrl: 'https://github.com/Deepak-Selvakumar/Student-Management-System',
      category: 'Web Application',
      year: '2023'
    } 
    // {
    //   id: 1,
    //   title: 'EUREKA Platform',
    //   description: 'A revolutionary project management platform with AI-powered insights and analytics for teams of all sizes.',
    //   technologies: ['Angular', 'Node.js', 'MongoDB', 'TensorFlow'],
    //   imageUrl: 'https://placehold.co/600x400/3498db/white?text=EUREKA',
    //   projectUrl: '#',
    //   githubUrl: '#',
    //   category: 'Web Application',
    //   year: '2024'
    // },
    // {
    //   id: 2,
    //   title: 'Smart Finance Dashboard',
    //   description: 'Interactive financial dashboard with real-time data visualization and predictive analytics for personal finance management.',
    //   technologies: ['React', 'D3.js', 'Python', 'Firebase'],
    //   imageUrl: 'https://placehold.co/600x400/2ecc71/white?text=Finance+Dash',
    //   projectUrl: '#',
    //   githubUrl: '#',
    //   category: 'Dashboard',
    //   year: '2023'
    // },
    // {
    //   id: 3,
    //   title: 'HealthTrack Mobile App',
    //   description: 'Mobile application for health monitoring with wearable device integration and health insights.',
    //   technologies: ['Flutter', 'Firebase', 'GraphQL', 'AWS'],
    //   imageUrl: 'https://placehold.co/600x400/e74c3c/white?text=HealthTrack',
    //   projectUrl: '#',
    //   githubUrl: '#',
    //   category: 'Mobile App',
    //   year: '2023'
    // },
    // {
    //   id: 4,
    //   title: 'E-Commerce Solution',
    //   description: 'Complete e-commerce platform with inventory management, payment processing, and customer analytics.',
    //   technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe API'],
    //   imageUrl: 'https://placehold.co/600x400/9b59b6/white?text=E-Commerce',
    //   projectUrl: '#',
    //   githubUrl: '#',
    //   category: 'Web Application',
    //   year: '2022'
    // },
    // {
    //   id: 5,
    //   title: 'Task Automation System',
    //   description: 'Workflow automation system that streamlines business processes and reduces manual tasks by 70%.',
    //   technologies: ['Python', 'Django', 'Celery', 'PostgreSQL'],
    //   imageUrl: 'https://placehold.co/600x400/f39c12/white?text=Automation',
    //   projectUrl: '#',
    //   githubUrl: '#',
    //   category: 'Backend System',
    //   year: '2022'
    // },
    // {
    //   id: 6,
    //   title: 'Social Media Analytics',
    //   description: 'Analytics platform for social media metrics tracking, sentiment analysis, and engagement insights.',
    //   technologies: ['Next.js', 'Node.js', 'MongoDB', 'Chart.js'],
    //   imageUrl: 'https://placehold.co/600x400/34495e/white?text=Social+Analytics',
    //   projectUrl: '#',
    //   githubUrl: '#',
    //   category: 'Analytics',
    //   year: '2021'
    // }
  ];

  filteredProjects: Project[] = [...this.projects];
  categories: string[] = ['All', 'Web Application', 'Mobile App', 'Dashboard', 'Backend System', 'Analytics'];
  selectedCategory: string = 'All';

  filterProjects(category: string): void {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }
}