import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule],
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
