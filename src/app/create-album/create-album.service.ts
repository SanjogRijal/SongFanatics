import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAlbumService {

  constructor(private http: HttpClient) { }

  createAlbum(albumObject){
  	return this.http.post("http://localhost:8080/create/album", albumObject);
  }

  getAllArtists(){
  	return this.http.get("http://localhost:8080/artists/all");
  }

}
