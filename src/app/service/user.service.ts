import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DummyUser } from '../commom/dummy-user';
import { Users } from '../common/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='https://dummyjson.com/users';
  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.baseUrl);
  }

  getAllToDos():Observable<DummyUser[]>{
    return this.httpClient.get<DummyUser[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
