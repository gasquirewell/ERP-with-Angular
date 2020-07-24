import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoText = "";
  todoList =  [];

  constructor() { }

  ngOnInit(): void {
  }

  saveTodo() {
    console.log(this.todoText);
    this.todoList.push(this.todoText);
    this.todoText = "";
  }

  todoCliked() {
    console.log("todo Clicked")
  }

}


