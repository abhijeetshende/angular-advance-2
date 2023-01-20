import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TodoService } from './todo.service';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Todo> {

  constructor(private todoService:TodoService) { }
  resolve(){
      return this.todoService.getTodo();
  }
}
