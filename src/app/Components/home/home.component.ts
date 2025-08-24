import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  achievements?: string[];
  certifications?: string[];
  achievementLinks?: string[];
  certificationLinks?: string[];
  publications?: string[];
  publicationsLinks?: string[];
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
      year: "Mar 2024 - Present",
      title: "Software Engineer at SRF Limited",
      description: "Working in Finance Module and Sel-Billing in ShriConnect Application",
      achievements: [
        "Standout Performer Award (2024-2025)",
        "Best Project Award (2024-2025)"
      ],
      achievementLinks: [
        "https://drive.google.com/file/d/1p2v9LVE6AJLBt_E2GuQ1QG8Fqm3j5fQy/view",
        "https://drive.google.com/file/d/1KxUMqEcBnShb2KSpf_5ZgYXHs5YM9cyi/view"
      ],
      certifications: [
        "ASP.NET Core WEB Api - Udemy Certification"
      ],
      certificationLinks: [
        "https://drive.google.com/file/d/1JQ_CwgkW2l_FLTpDVz5Kk2yGyvoqugIa/view?usp=sharing"
      ]
    },
    {
      year: "Sept 2023 - Mar 2024",
      title: "Software Trainee at SRF Limited",
      description: "Worked in Finance & Admin Module in ShriConnect Application"
    },
    {
      year: "July 2023 - Aug 2023",
      title: "Internship Training at SRF Limited",
      description: "Completed Class Room Training Program on c#, .Net, Sql Server & Web Apis" 
    },
    {
      year: "2019 - 2023",
      title: "Bachelor of Engineering",
      description: "Completed my Bachelors in Electronics and Communication Engineering",
      achievements: [
        "Won 2nd Runner Up with Cash award of 300 Dollars in Innoculture Paper Presentation Contest" 
      ],
      achievementLinks: [
        "https://drive.google.com/file/d/1LJRfAjiWGZZ_gkb0WbxHkkkligTdjenC/view" 
      ],
      certifications: [
        "Pega Certified System Architect",
        "Pega Certified Senior System Architect",
        "Programming in Java - NPTEL Certification",
        "Python - NPTEL Certification",
        "Cloud Computing - NPTEL Certification",
      ],
      certificationLinks: [
        "https://drive.google.com/file/d/1OdihHyIOUfMjexPAyj4ukOQ-e6TRBl-O/view",
        "https://drive.google.com/file/d/1ua3q0Y_pHN3Fd56UM_9i6-o98xK3NXkY/view",
        "https://drive.google.com/file/d/1z8nYALE5DirPYIkTwH8s10_Vg5b-PaZB/view",
        "https://drive.google.com/file/d/1ANAASV1gytFyDkD5nRUxOligYuG0KInt/view",
        "https://drive.google.com/file/d/1QiZ3-c5U4bzGM0VqYqCMPND8u_4dJxb4/view"
      ]
    },
    {
      year: "2019",
      title: "12th Grade",
      description: "Completed my Schooling at St joseph Mat. Hr. Sec. School at Marai Malai Nager, Chenalpattu. Tamil Nadu, India."       
    },
    {
      year: "2017",
      title: "10th Grade",
      description: "Completed my Schooling at St joseph Mat. Hr. Sec. School at Marai Malai Nager, Chenalpattu. Tamil Nadu, India."  ,
      achievements: [
        "Got 100% in Mathematics in 10th Public State Board Exam",
        "Got 97% in 10th Public State Board Exam" 
      ],     
      achievementLinks: [
        "https://drive.google.com/file/d/1LWssHY4Ch1PHF_MNALLkZ8BdmtpWj8WD/view?usp=sharing" ,
        "https://drive.google.com/file/d/1LWssHY4Ch1PHF_MNALLkZ8BdmtpWj8WD/view?usp=sharing" 
      ]
    }
  ];

  // Function to open Google Drive link
  openDriveLink(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }
}