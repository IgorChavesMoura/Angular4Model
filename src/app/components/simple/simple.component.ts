import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  @Input()
  value:number;

  constructor() { 
    
  }

  ngOnInit() {
    if(!this.value){
      this.value = 0;
    }
  }

}
