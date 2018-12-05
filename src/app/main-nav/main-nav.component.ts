import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  signInForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      username: [null, Validators.compose([Validators.required,Validators.minLength(10)]) ],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    });

  }

  login(fg: FormGroup){
    console.log(fg.value);
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

}
