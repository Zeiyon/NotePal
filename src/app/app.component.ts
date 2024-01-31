import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./account/login/login.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FontAwesomeModule, NavbarComponent, LoginComponent]
})
export class AppComponent {
  faUser = faUser;
  title = 'NotePal';
}
