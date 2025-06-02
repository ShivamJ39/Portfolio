import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';


import { ProjectDetailsComponent } from './project-details/project-details.component'; // Adjust the path if needed
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent } ,
 { path: 'project', component: ProjectComponent },
 {path: 'project-details', component: ProjectDetailsComponent },
 { path: 'skills', component: SkillsComponent} ,
 { path: 'contact', component: ContactComponent} ,
 
];
