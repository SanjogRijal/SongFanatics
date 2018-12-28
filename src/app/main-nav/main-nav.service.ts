import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainNavService {

  constructor(private http: HttpClient) { }

  signIn(username,password){
  	return this.http.get('http://localhost:8080/signin/'+username+'/'+password);
  }

}
