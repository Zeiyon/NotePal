import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  showPassword: boolean = false;

  onSubmit() {
    console.log('Form submitted');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
