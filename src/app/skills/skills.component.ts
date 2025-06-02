import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills', 

  
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      name: 'Angular',
      image: 'assets/skills/angular.png'
    },
    {
      name: 'TypeScript',
      image: 'assets/skills/typescript.png'
    },
    {
      name: 'RxJS',
      image: 'assets/skills/rxjs.png'
    },
    {
      name: 'HTML5',
      image: 'assets/skills/html.png'
    },
    {
      name: 'CSS3',
      image: 'assets/skills/css.png'
    },
    {
      name: 'JavaScript',
      image: 'assets/skills/javascript.png'
    }
  ];
}
