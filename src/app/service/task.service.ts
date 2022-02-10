import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-task';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Tupe':'application/json'
  })
}

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

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apliUrl}/${task.id}`
    return this.http.delete<Task>(url)

  }

  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apliUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apliUrl,task,httpOptions)
  }

}
