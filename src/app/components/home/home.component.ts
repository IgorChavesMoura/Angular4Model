import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app/app.service';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  title:string;
  count:number;
  
  constructor(private appService:AppService, private userService:UserService) {
    this.title = this.appService.title;
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      console.log(users.length);
      this.count = users.length;
    })
  }

}
