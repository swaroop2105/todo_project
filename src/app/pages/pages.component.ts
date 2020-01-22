import { Component, OnInit } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';
import { $ } from 'protractor';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  notes = [];

  title: FormControl = new FormControl('', [
    Validators.required
  ])
  note: FormControl = new FormControl('', [
    Validators.required
  ])


  submitNotes: FormGroup = new FormGroup({
    title: this.title,
    note: this.note
  })


  constructor(private _service:TodoService, private _route:Router) { }
  public checker=false;

  ngOnInit() {
  }

  submit() {
    console.log(this.submitNotes.value);
  
    if(this.submitNotes.value.title=='' || this.submitNotes.value.note=='' ){
      this.checker=true;
    }
    else{
    this.checker=false;
    this._service.myNotes.push(this.submitNotes.value);
    this._route.navigate(['/notes']);
    
    
  }
  }
  notescheck(){
    this._route.navigate(['/notes']);
  }

  textname(value1, value2) {
    const data = {
      title: value1,
      note: value2
    }
    this.notes.push(data);
    console.log(this.notes)
  }

}
