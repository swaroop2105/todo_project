import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent
  },

  {
    path: 'notes',
    component: NotesComponent
  }
];

@NgModule({
  declarations: [NotesComponent,PagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class PagesModule { }
