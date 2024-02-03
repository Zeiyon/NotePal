import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private currPageSubject = new BehaviorSubject<number>(1);
  currPage$ = this.currPageSubject.asObservable();

  constructor() {}

  changePage(num: number) {
    this.currPageSubject.next(num); // Notify subscribers of a new value
  }
}
