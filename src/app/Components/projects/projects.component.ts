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
      title: 'EUREKA Platform',
      description: 'A revolutionary project management platform with AI-powered insights and analytics for teams of all sizes.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'TensorFlow'],
      imageUrl: 'https://placehold.co/600x400/3498db/white?text=EUREKA',
      projectUrl: '#',
      githubUrl: '#',
      category: 'Web Application',
      year: '2024'
    },
    {
      id: 2,
      title: 'Smart Finance Dashboard',
      description: 'Interactive financial dashboard with real-time data visualization and predictive analytics for personal finance management.',
      technologies: ['React', 'D3.js', 'Python', 'Firebase'],
      imageUrl: 'https://placehold.co/600x400/2ecc71/white?text=Finance+Dash',
      projectUrl: '#',
      githubUrl: '#',
      category: 'Dashboard',
      year: '2023'
    },
    {
      id: 3,
      title: 'HealthTrack Mobile App',
      description: 'Mobile application for health monitoring with wearable device integration and health insights.',
      technologies: ['Flutter', 'Firebase', 'GraphQL', 'AWS'],
      imageUrl: 'https://placehold.co/600x400/e74c3c/white?text=HealthTrack',
      projectUrl: '#',
      githubUrl: '#',
      category: 'Mobile App',
      year: '2023'
    },
    {
      id: 4,
      title: 'E-Commerce Solution',
      description: 'Complete e-commerce platform with inventory management, payment processing, and customer analytics.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe API'],
      imageUrl: 'https://placehold.co/600x400/9b59b6/white?text=E-Commerce',
      projectUrl: '#',
      githubUrl: '#',
      category: 'Web Application',
      year: '2022'
    },
    {
      id: 5,
      title: 'Task Automation System',
      description: 'Workflow automation system that streamlines business processes and reduces manual tasks by 70%.',
      technologies: ['Python', 'Django', 'Celery', 'PostgreSQL'],
      imageUrl: 'https://placehold.co/600x400/f39c12/white?text=Automation',
      projectUrl: '#',
      githubUrl: '#',
      category: 'Backend System',
      year: '2022'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media metrics tracking, sentiment analysis, and engagement insights.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Chart.js'],
      imageUrl: 'https://placehold.co/600x400/34495e/white?text=Social+Analytics',
      projectUrl: '#',
      githubUrl: '#',
      category: 'Analytics',
      year: '2021'
    }
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