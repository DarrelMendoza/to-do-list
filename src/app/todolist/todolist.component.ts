import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  title = 'todolist-angular';
  todos = [];
  newTodo = '';
  invalidInput = false;

  @ViewChild('myToast') myToast: ElementRef;

  constructor(private http: HttpClient) { 
    this.getTodos();
  }

  ngOnInit(): void {
  }

  getTodos() {
    this.http.get<any>('http://localhost:5000/todos').subscribe(
      data => {
        this.todos = data;
      }
    );
  }

  addTodo() {
    if (this.newTodo.trim() === '') {
      this.invalidInput = true;
      setTimeout(() => {
        this.invalidInput = false;
      }, 3000);  // The popup will disappear after 3 seconds
      return;
    }
    this.invalidInput = false; // Set invalidInput to false if the task is not empty
    this.http.post<any>('http://localhost:5000/todos', {task: this.newTodo}).subscribe(
      data => {
        this.getTodos();
      }
    );
    this.newTodo = '';
  }

  deleteTodo(id: number) {
    this.http.delete<any>(`http://localhost:5000/todos/${id}`).subscribe(
      data => {
        this.getTodos();
      }
    );
  }

  editTodo(id: number) {
    const updatedTask = this.todos.find(todo => todo.id === id).task;
    this.http.put<any>(`http://localhost:5000/todos/${id}`, {task: updatedTask}).subscribe(
      data => {
        this.getTodos();
        this.todos.forEach(todo => {
          if (todo.id === id) {
            todo.editing = false;
          }
        });
      }
    );
  }
}
