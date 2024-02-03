import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FontAwesomeModule, RouterOutlet, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  showPassword: boolean;
  showConfirmPassword: boolean;

  onSubmit() {
    console.log('Form submitted');
  }

  constructor() {
    this.showPassword = false;
    this.showConfirmPassword = false;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

}
