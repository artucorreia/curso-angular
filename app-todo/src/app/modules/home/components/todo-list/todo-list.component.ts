import { Component } from '@angular/core';
// import { Task } from './interfaceTask';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public hasTask = true;
  public test = 'coisas leves';
  constructor () { 

  }

  ngOnInit(): managerTask {
    return new managerTask();
  }
  
  teste(name: string) {
    
  }
}

export class Task {
  name: string;
  status: boolean;
  
  constructor(name: string) {
    this.name = name;
    this.status = false;
  }
}

export class managerTask {
  public tasks: Task[];

  constructor() { 
    this.tasks = [];
  }
  
  addTask(name: string): {} {
    return this.tasks.push(new Task(name));
  }
}