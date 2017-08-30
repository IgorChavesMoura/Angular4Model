import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../services/app/app.service';

@Component({
  selector: 'app-list-draggable',
  templateUrl: './list-draggable.component.html',
  styleUrls: ['./list-draggable.component.css']
})
export class ListDraggableComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  bag: string;

  @Input()
  listItems: Array<any>;

  @Input()
  public selectedItem: number;

  constructor(public appService:AppService) {
  }

  ngOnInit() {
  }

  private selectItem(index) {
    this.selectedItem = index;
    console.log("selectedItem: " + this.selectedItem);
  }

}
