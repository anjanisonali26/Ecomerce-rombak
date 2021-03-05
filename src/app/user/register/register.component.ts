import { UserService } from './../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;

  signUpForm: FormGroup;

  constructor(public fb: FormBuilder, public userService: UserService) {

    this.signUpForm = this.fb.group({
      email: [''],
      password: [''],
      name: ['']
    })
  }

  ngOnInit(): void {
  }

  signUp() {
    this.user = this.signUpForm.value;
    this.userService.signUp(this.user)
  }

}
