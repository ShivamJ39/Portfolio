import { CommonModule } from '@angular/common';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, OnInit } from '@angular/core';





@Component({

  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;



 

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');

    const typeText = (element: HTMLElement | null, text: string, callback: () => void) => {
      if (!element) return;
      element.classList.add('visible');
      element.textContent = '';
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex < text.length) {
          element.textContent += text[charIndex];
          charIndex++;
          setTimeout(typeChar, 40); // smoother typing
        } else {
          setTimeout(callback, 900);
        }
      };

      typeChar();
    };

    const eraseText = (element: HTMLElement | null, callback: () => void) => {
      if (!element) return;
      let text = element.textContent || '';
      let charIndex = text.length;

      const eraseChar = () => {
        if (charIndex > 0) {
          element.textContent = text.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseChar, 20); // smoother erasing
        } else {
          setTimeout(callback, 300);
        }
      };
      eraseChar();
    };
    // First type "Hi, I am Coder" and keep it, then loop "Frontend Developer"
    typeText(line1, 'Hi, I am Shivam', () => {
      const loopFrontend = () => {
        typeText(line2, 'Frontend Developer', () => {
          setTimeout(() => {
            eraseText(line2, loopFrontend);
          }, 900);
        });
      };
      loopFrontend();
    });
  }
}
