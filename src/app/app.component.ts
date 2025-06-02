import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router'; 
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
