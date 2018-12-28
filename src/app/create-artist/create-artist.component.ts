import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { CreateArtistService } from './create-artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {
  artistForm: FormGroup;
  constructor(private fb:FormBuilder, private service: CreateArtistService) { }

  ngOnInit() {
  	this.artistForm = this.fb.group({
  		'bandName': ['', Validators.required],
  		'artistName': ['',Validators.required],
  		'active': [''],
  		'status': [''],
  		'formationDate': [null, Validators.required],


  	})
  }

  addArtist(fg: FormGroup){
  	const bandName = fg.value.bandName;
  	const artistName = fg.value.artistName;
  	const status = fg.value.status;
  	const formationDate = fg.value.formationDate;
  	const createdAt = new Date();

  	var newArtist = {
  		bandName,
  		artistName,
  		status,
  		formationDate,
  		createdAt
  	}

  	console.log(newArtist);

  	this.service.createArtist(newArtist).subscribe(() => {});
  	alert("Artist Successfully added");
  	location.reload();
  }

}
