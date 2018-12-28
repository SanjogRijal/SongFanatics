import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { MainNavService } from './main-nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  providers: [MainNavService]
})
export class MainNavComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private fb: FormBuilder, private service: MainNavService, private router: Router) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      username: [null, Validators.compose([Validators.required,Validators.minLength(10)]) ],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    });

  }

  redirectTo(navigate){
    var featured = document.getElementById("featured");
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var signup = document.getElementById("signup");
    var signin = document.getElementById('signin');

  	switch(navigate){
  		case 'featured':
        featured.style.display = "block";
        home.style.display = "none";
        about.style.display = "none";
        signup.style.display = "none";
        signin.style.display = "none";
        break;

      case 'home':
         featured.style.display = "none";
        home.style.display = "block";
        about.style.display = "none";
        signup.style.display = "none";
        signin.style.display = "none";
        break;

      case 'about':
       featured.style.display = "none";
        home.style.display = "none";
        about.style.display = "block";
        signup.style.display = "none";
        signin.style.display = "none";
        break;

      case 'signup':
        featured.style.display = "none";
        home.style.display = "none";
        about.style.display = "none";
        signup.style.display = "block";
        signin.style.display = "none";
        break;

      case 'signin':
  	    featured.style.display = "none";
        home.style.display = "none";
        about.style.display = "none";
        signup.style.display = "none";
        signin.style.display = "block";
        break;

      default:
        console.log("Unexpected Error Occured");
        break;
    }
  }

  login(fg: FormGroup){
    this.service.signIn(fg.value.username,fg.value.password).subscribe((userData: any) => {
      if(userData.length > 0){
        localStorage.setItem('sessionItem',userData[0].id);
        console.log(localStorage.getItem('sessionItem'));
        this.router.navigate(['homepage']);
      } else {
        alert("Username and password do not match");
      }
    });
  }

}
