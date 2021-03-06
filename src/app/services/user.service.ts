import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})

//TO ADD USER
export class UserService {
  constructor(private http: HttpClient) {}

  //Add User
  public addUser(user: any) {
    return this.http.post(`${baseUrl}/user/`, user);
  }
  public updateUser(user) {
    return this.http.put(`${baseUrl}/user/`, user);
  }
  public getUser(username) {
    return this.http.get(`${baseUrl}/user/${username}`);
  }
}
