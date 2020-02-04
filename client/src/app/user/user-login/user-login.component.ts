import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  username: String
  loggedInUser: String
  password: String

  logged_in: String;


  ngOnInit() {
  }
  
  loginUser(event: void, username: string, password: string) {
    this.username = username
    this.password = password
    // Since username/pw is being cleared - want a temp way to store username for login purposes 'Welcome user [loggedInUser]'
    this.loggedInUser = username

    // Cowboy code, honestly no idea why it works
    // If the username/password field isn't blank
    // This just sends username/password to the backend in the format 'username_password'
    this.userService.loginUser(this.username + "_" + this.password).subscribe(logged_in => this.checkLogin(this.logged_in = logged_in))

    // Just printing to the console the temp logged in user
    console.log("Username: " + this.loggedInUser + " Password: " + password)  
    // 'Clearing' the fields after someone logged in, don't need em anymore - data sent to backend already
    this.username = undefined
    this.password = undefined

  }

  checkLogin(login_result: String) {
    if (login_result == "true") {
      // Do login stuff ...
      console.log("logged in")
    } else {
      // Try again
      console.log("invalid login")
    }
  }
}
