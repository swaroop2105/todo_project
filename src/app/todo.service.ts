import { Injectable } from '@angular/core';

export interface note {
  title: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  myNotes=[];
  constructor() { }
  
  gettodo() {

  }
}
