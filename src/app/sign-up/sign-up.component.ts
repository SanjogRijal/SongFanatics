import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  	
    this.signUpForm = this.fb.group({
    	firstName: [null, Validators.required],
		lastName: [null, Validators.required],

    	signUpUsername: [null, Validators.required],
      	signUpPassword: [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      	email: [null, Validators.compose([Validators.required])],
      	phone: [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    });
  }

  signUp(fg: FormGroup){
  	console.log(fg.value);

    var firstName = fg.value.firstName;
    var lastName = fg.value.lastName;
    var username = fg.value.signUpUsername;
    var password = fg.value.signUpPassword;
    var email = fg.value.email;
    var phone = fg.value.phone;

    var signUpObject = {
      firstName,
      lastName,
      username,
      password,
      email,
      phone,
    }

    this.service.insertUser(signUpObject).subscribe(()=> {});
    this.router.navigate('');
  }

}
