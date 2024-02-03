import { Component } from '@angular/core';

@Component({
  selector: 'app-notelist',
  standalone: true,
  imports: [],
  templateUrl: './notelist.component.html',
  styleUrl: './notelist.component.scss'
})
export class NotelistComponent {
  // Enhanced dummy data for the notes, now with an 'id' field.
  notes = [
    {
      id: 1,
      noteName: 'Grocery shopping',
      dateCreated: '2023-01-01',
      lastModified: '2023-01-15',
      password: 'Yes',
    },
    {
      id: 2,
      noteName: 'Books to read',
      dateCreated: '2023-01-03',
      lastModified: '2023-01-10',
      password: 'No',
    },
    {
      id: 3,
      noteName: 'Workout plan',
      dateCreated: '2023-01-05',
      lastModified: '2023-01-20',
      password: 'Yes',
    },
    {
      id: 4,
      noteName: 'Angular project ideas',
      dateCreated: '2023-01-10',
      lastModified: '2023-01-18',
      password: 'No',
    },
    // ... more notes ...
  ];

  constructor() {}

  ngOnInit(): void {
    // Your initialization logic can go here if needed.
  }

  deleteNote(index: number): void {
    // Logic to "delete" a note by removing it from the array.
    this.notes.splice(index, 1);
  }

}
