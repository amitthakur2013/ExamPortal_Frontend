import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide=true;

  public user = {
  username:'',
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  phone:''
  }

  constructor(private userService:UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
  	if(this.user.username === '' || this.user.username === null){
  	this._snackBar.open("Username is required !",'Dismiss',{
  		duration:2000
  	});
  	return;
  	}

  	//add user
  	this.userService.addUser(this.user).subscribe(data=> {
	  	if(data === null)
	  	{
	  		this._snackBar.open(`Username already taken !`,'Dismiss',{
  		duration:2000
  	});
	  	} else {
	  		this._snackBar.open(`Registered Successfully!`,'Dismiss',{
	  		verticalPosition:'top',
  		duration:2000
  	});
	  	}
  	}, error => console.log(error));
  }

}
