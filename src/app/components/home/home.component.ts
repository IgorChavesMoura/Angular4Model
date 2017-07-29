import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  title:string;
  
  constructor(private appService:AppService) {
    this.title = this.appService.title;
  }

  ngOnInit() {
  }

}
