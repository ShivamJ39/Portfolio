import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProjectComponent {
  projects = [
    {


      name: 'Portfolio',
      image: 'assets/projects/projects.jpg',
      description: 'This is a description for Project 1.',
      link: 'https://example.com/project1',
      github: 'https://github.com/example/project1'
    },



















    
    {
      name: 'Task Manager',
      image: 'assets/projects/projects.jpg',
      description: 'This is a description for Project 2.',
      link: 'https://example.com/project2',
      github: 'https://github.com/example/project2'
    },
    {
      name:'Library Management System',
      image: 'assets/projects/projects.jpg',
      description: 'This is a description for Project 3.',
      link: 'https://example.com/project3',
      github: 'https://github.com/example/project3'
    },
    {
      name: 'E-commerce Website',
      image: 'assets/projects/projects.jpg',
      description: 'This is a description for Project 4.',
      link: 'https://example.com/project4',
      github: 'https://github.com/example/project4'
    },




    {
      name: 'Restaurant App',
      image: 'assets/projects/projects.jpg',
      description: 'This is a description for Project 5.',
      link: 'https://example.com/project5',
      github: 'https://github.com/example/project5'
    },


    {
      name: 'Resume Builder',
      image: 'assets/projects/projects.jpg',
      description: 'This is a description for Project 6.',
      link: 'https://example.com/project6',
      github: 'https://github.com/example/project6'
    }
  ];
}
