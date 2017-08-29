import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  public addModule: boolean = false;

  @Input()
  bag: string;

  @Input()
  listItems:Array<any>;

  constructor(private dragulaService: DragulaService) {
    dragulaService.out.subscribe((value) => {
      this.addModule = false;
    });
  }

  // public copyModules: Array<any> = [
  //   {
  //     name: 'Module type 1',
  //     entities: [
  //       {
  //         name: 'User',
  //         fields: [
  //           {
  //             name: 'id',
  //             type: 'number',
  //             properties: ['Unique', 'Primary']
  //           }]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Module type 2',
  //     entities: [
  //       {
  //         name: 'User',
  //         fields: [
  //           {
  //             name: 'id',
  //             type: 'number',
  //             properties: ['Unique', 'Primary']
  //           }]
  //       }
  //     ]
  //   },
  // ]

  // offClickHandler(event: any) {
  //   console.log("offClickHandler()");
  //   if (!event.target.closest(".panel-group") && !event.target.closest(".panel-group")) {
  //     console.log("etste");
  //     // do whatever you want here
  //   }
  // }

  ngOnInit() {
  }

}
