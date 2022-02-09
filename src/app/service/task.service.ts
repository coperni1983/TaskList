import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apliUrl = 'http://localhost:3000/tasks';

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apliUrl)
  }

}
