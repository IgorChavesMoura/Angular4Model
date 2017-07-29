import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent { 
  
  title:string;
  collapse:boolean = true;
 
  constructor(private appService:AppService) { 
     this.title = this.appService.title;
  }

  ngOnInit() {
  }
  
  toggleCollapse() {
    this.collapse = !this.collapse;
  }
  
}

