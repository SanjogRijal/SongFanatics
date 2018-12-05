import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  insertUser(signUpObject){
  	this.http.post('http://localhost:8080/insert/user',signUpObject);
  }
}
