import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './resolve.service';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}
  getTodo()   {
    return  this.httpClient.get<Todo>('https://jsonplaceholder.typicode.com/todos/1');
  }
}
