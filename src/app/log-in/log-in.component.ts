import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginUserModel = new Login('', '');
  submitted = false;

  constructor(private router:Router) {}
  
  onSubmit(form: any) {
    // console.log(form.valid);
    this.submitted = true;
    if (form.valid) {
      // this.users.push(this.userModel);
      if (
        this.loginUserModel.name === 'admin' &&
        this.loginUserModel.password === 'Admin@123'
      ) {
        this.router.navigate(['/main-view']);
        // alert('Matched');
      } else {
        alert('Please enter correct credentials.');
      }
    } else {
      alert('Please enter correct username and password.');
    }
    this.loginUserModel = new Login("", "");
    this.submitted = false;
    form.resetForm();
  }


  ngOnInit(): void {
  }
}