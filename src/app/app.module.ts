import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';

import { routes } from './app.routes';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'; // Import FontAwesomeModule
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, 
    FontAwesomeModule// Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }