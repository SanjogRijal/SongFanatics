import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateSongService } from './create-song.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
	createSongForm: FormGroup;
	albumsData;
	allArtists;

  constructor(private fb: FormBuilder, private service: CreateSongService) { }

  ngOnInit() {
  	this.createSongForm = this.fb.group({
  		'songName': ['', Validators.required],
  		'artist': ['',Validators.required],
      'singleFlag': ['',Validators.required],
  		'album': ['', Validators.required],
      'releaseDate': ['', Validators.required],
  		'youtubeID': ['', Validators.required],
  	});

  	this.service.getAllArtists().subscribe((allArtists) => {
  		this.allArtists = allArtists;
  	});

  	this.service.getAllAlbums().subscribe((albumsData) => {
  		this.albumsData = albumsData;
  	});
  }

  getAlbumsByArtistID(artistID){
  	console.log(artistID);
  	
  }

  createSong(fg: FormGroup){
    var songName: string = fg.value.songName;
    var artistID: number = fg.value.artist;
    var albumID: number = fg.value.album;
    var singleFlag: boolean = fg.value.singleFlag;
    var releaseDate = fg.value.releaseDate.toString();
    var youtubeID: string = fg.value.youtubeID;

    console.log(singleFlag);
    var newSong = {
      songName,
      artistID,
      singleFlag: singleFlag.toString(),
      albumID,
      releaseDate,
      youtubeID
    }

    console.log(newSong);

    this.service.createSong(newSong).subscribe(()=>{});
  }

}
