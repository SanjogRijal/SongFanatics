import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateArtistService {

  constructor(private http: HttpClient) { }

  createArtist(newArtist){
  	return this.http.post("http://localhost:8080/create/artist", newArtist);
  }

  getAllArtist(){
  	return this.http.get("http://localhost:8080/artists/all");
  }

}	
