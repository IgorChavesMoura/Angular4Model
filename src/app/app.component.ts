import { Component, OnChanges } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnChanges{
  
  title:string;
  collapse:boolean = true;

  constructor(private appService:AppService) { 
  }

  
  ngOnInit() {
    this.title = this.appService.title;
  }
  
  toggleCollapse() {
    this.collapse = !this.collapse;
  }

  ngOnChanges(changes) {
    console.log("changes");
    console.log(changes);
  }

  
}

