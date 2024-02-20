import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url: string = 'http://localhost:3000/';
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(localStorage.getItem('token'))
  }
  
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}list-user`).pipe(
      map(
        res => res,
      ),
      error => error
    );
  }
}

