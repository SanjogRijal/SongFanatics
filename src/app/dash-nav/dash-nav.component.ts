import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.css']
})
export class DashNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
  	localStorage.clear();
  	this.router.navigate(['']);
  }

}
