import { Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { NotelistComponent } from './account/notelist/notelist.component';

export const routes: Routes = [
    { path: 'notes', component: NoteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'notelist', component: NotelistComponent },
    { path: '', redirectTo: '/notes', pathMatch: 'full' },
    { path: '**', redirectTo: '/notes', pathMatch: 'full' },
];
