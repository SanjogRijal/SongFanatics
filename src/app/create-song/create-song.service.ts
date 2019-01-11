import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateSongService {

  constructor(private http: HttpClient) { }

  getAllArtists(){
  	return this.http.get("http://localhost:8080/artists/all");
  }

  getAlbumsByArtistID(artistID){
  	return this.http.get("http://localhost:8080/albumBy/artist/" + artistID);

  }

  getAllAlbums(){
  	return this.http.get("http://localhost:8080/albums/all");
  }

  createSong(newSong: object){
    return this.http.post("http://localhost:8080/create/song", newSong);
  }

}	
