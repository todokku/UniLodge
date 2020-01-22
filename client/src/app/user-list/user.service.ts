import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  private userUrl = 'http://localhost:5000';  // URL to REST API

  constructor(private http: HttpClient) { }

  /** GET single user from the DB */
  getUser(Username: string): Observable<User[]> {
    return this.http.post<User[]>(this.userUrl + '/api/user', Username);
  }  

  /** GET users from the DB test */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/api/users');
  }

  /** Delete a user from the DB */
  removeUser(Username: string) {
    if (confirm("Are you sure you want to delete?")) {
        return this.http.delete<String>(this.userUrl + '/api/users/' + Username);
      }
  }

  /** Update a user in the DB */
  updateUser(Username: string, NewPassword: string) {
    if (confirm("Are you sure you want to update?")) {
        return this.http.put<String>(this.userUrl + '/api/users/update/' + Username, NewPassword);
      }
  }  

  /** Add an Image to the DB */
  addImage(Username: string, Image: string) {
    if (confirm("Are you sure you want to add this picture?")) {
        return this.http.put<String>(this.userUrl + '/api/users/add-image/' + Username, Image);
      }
  }  

}