import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';// Adjust the path if needed
import { ContactComponent } from './contact/contact.component';// Adjust the path if needed
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'home', component: HomeComponent },


     { path: 'about', component: AboutComponent }, // Adjust the path if needed
     { path : 'project', component: ProjectComponent },
     { path : 'skills', component: SkillsComponent}, // Adjust the path if needed
      { path : 'contact', component: ContactComponent}, // Adjust the path if needed
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    ]),
  ],
};
