import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./account/login/login.component";
import { SignupComponent } from "./account/signup/signup.component";
import { NotelistComponent } from "./account/notelist/notelist.component";
import { NoteComponent } from "./note/note.component";
import { Subscription } from 'rxjs';
import { NoteService } from './note.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FontAwesomeModule, NavbarComponent, LoginComponent, SignupComponent, NotelistComponent, NoteComponent]
})
export class AppComponent {
  title = 'NotePal';

  currPage = 1;
  private subscriptions = new Subscription();

  constructor(private noteService: NoteService) {
    // Subscribe to changes in currPage
    this.subscriptions.add(
      this.noteService.currPage$.subscribe((page) => {
        this.currPage = page;
      }),
    );
  }

  ngOnDestroy() {
    // Clean up subscriptions
    this.subscriptions.unsubscribe();
  }
}
