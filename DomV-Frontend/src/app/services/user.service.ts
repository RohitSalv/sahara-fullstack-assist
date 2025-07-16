import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }
  private baseUrl = 'http://localhost:8092';

  registerUser(user:any):Observable<any>{
    //http://localhost:8092/user/register-user
   return this.http.post('http://localhost:8092/user/register-user',user, {responseType: 'text' as 'text'});
   }

   loginUser(loginRequest: any): Observable<any> {
    // http://localhost:8092/user/login-user

    return this.http.post('http://localhost:8092/user/login-user', loginRequest)

  }
  getAllUsers(): Observable<any> {
  return this.http.get(`${this.baseUrl}/user/users`);
}

deleteUser(mob: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/user/${mob}`, { responseType: 'text' as 'text' });
}


}
