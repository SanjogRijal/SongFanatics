import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  sessionItem;
  allAlbums;

  constructor(private router: Router, private service: HomepageService) { 
  	this.sessionItem = localStorage.getItem('sessionItem');
  	if(parseInt(this.sessionItem) == NaN || this.sessionItem == undefined || this.sessionItem == null){
  		alert("Please login to continue");
  		this.router.navigate(['']);
  	}
  }

  ngOnInit() {
    this.service.getAllAlbums().subscribe((allAlbums: any) => {
      this.allAlbums = allAlbums;
    }); 
  }
}
