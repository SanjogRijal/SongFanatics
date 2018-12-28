import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateAlbumService } from './create-album.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css'],
  providers: [CreateAlbumService]
})
export class CreateAlbumComponent implements OnInit {
  createAlbumForm: FormGroup;
  artistData;

  constructor(private fb: FormBuilder, private service: CreateAlbumService) { }

  ngOnInit() {
  	this.createAlbumForm = this.fb.group({
  		'albumName': [null, Validators.required],
  		'releaseDate': [null, Validators.required],
  		'artist': [null, Validators.required],
  		'youtubeID': [null, Validators.required]
  	});

    this.service.getAllArtists().subscribe((artistData) => {
      this.artistData = artistData;
    });
  }

  createAlbum(fg: FormGroup){
  	var albumName = fg.value.albumName;
  	var releaseDate = fg.value.releaseDate;
  	var artist = fg.value.artist;
  	var youtubeID = fg.value.youtubeID;

    
    var newAlbum = {
      albumName,
      releaseDate,
      artist,
      youtubeID,
      logo: "../assets/background.jpg",
      createdBy: localStorage.getItem("sessionItem"),
    }

    this.service.createAlbum(newAlbum).subscribe(() => {});


  }

}
