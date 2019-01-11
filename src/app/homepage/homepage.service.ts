import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  getAllAlbums(){
  	return this.http.get("http://localhost:8080/albums/all");
  }
}
