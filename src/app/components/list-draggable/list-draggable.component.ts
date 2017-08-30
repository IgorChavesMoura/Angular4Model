import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../services/app/app.service';

@Component({
  selector: 'app-list-draggable',
  templateUrl: './list-draggable.component.html',
  styleUrls: ['./list-draggable.component.css']
})
export class ListDraggableComponent implements OnInit {

  @Input() title: string;

  @Input() bag: string;

  @Input() listItems: Array<any>;

  @Input() selected: object;

  @Input() selectedProp: string;

  constructor(public appService:AppService) {
  }

  ngOnInit() {
    console.log("## " + this.selectedProp + " this.selected: " + this.selected[this.selectedProp]);
  }

  private selectItem(index) {
    this.selected[this.selectedProp] = index;
    console.log("selectedItem: " + this.selected[this.selectedProp]);
  }

}
