import { Component, OnInit } from '@angular/core';
import { TodoService, note } from 'src/app/todo.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public ti:any;
  public ni:any;

  notes:note[];
  constructor(private _service:TodoService,private _route:Router) { }

  ngOnInit() {
    this.notes = this._service.myNotes;
   }
  delete(val){
    if(confirm("do you really want to delete this todo?")){
    const i=this.notes.findIndex(e => e.title === val);
    if(i !== -1){
      this.notes.splice(i,1);
    }

  }
  }
  goback(){
    this._route.navigate(['/home']);

  }

}
