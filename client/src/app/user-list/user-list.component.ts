import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { User } from './user'
import { UserService } from './user.service';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  msgFromTheBackend: String
  users: User[] = [];
  public base64textString: any | ArrayBuffer;
  Username : String
  image: string | ArrayBuffer;
  uploadedImage: any = [];

  constructor(private route: ActivatedRoute, private userService: UserService) {}
  ngOnInit() {
    
    this.msgFromTheBackend = "dada";
    this.getUsers();
  }

  getUsers(): void {
		this.userService.getUsers().subscribe(users => this.users = users);
  }

  removeUser(Username: string):  void {
    this.userService.removeUser(Username)
    .subscribe(msgFromTheBackend => (this.msgFromTheBackend = msgFromTheBackend));
    this.ngOnInit();
    //this.userService.removeUser(Username).subscribe(success=> { this.getUsers() });
  }

  updateUser(Username: string):  void {
    this.userService.updateUser(Username).subscribe(success=> { this.getUsers() });
  }

  changeListener($event: { target: any; }) : void {
    this.readImage($event.target);
  }

  readImage(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      // Cuts off the first part of the base64 String, don't need it
      this.base64textString = (<string>myReader.result).split(',')[1];  
    }
    myReader.readAsDataURL(file);
  }

  submitImage() {
    this.uploadedImage = 'data:image/png;base64,' + this.base64textString;
  }
   
}


