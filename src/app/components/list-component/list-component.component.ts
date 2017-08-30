import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { ApplicationService } from './../../services/application/application.service';

// import { Application } from '../../models/Application';
import { ModuleApp } from '../../models/ModuleApp';
import { EntityApp } from '../../models/EntityApp';
import { FieldApp } from '../../models/FieldApp';
import { PropertyApp } from '../../models/PropertyApp';

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

  constructor(private dragulaService: DragulaService, public applicationService: ApplicationService) {
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

  public addNew(){
    // this.addModule = !this.addModule;

    this.applicationService.fetchApplication().subscribe(result=>{

      
      
      let prop1: PropertyApp = new PropertyApp();
      prop1.name = "String";
      
      
      let field2: FieldApp = new FieldApp();
      field2.name = "Name";
      
      let entity1: EntityApp = new EntityApp();
      entity1.name = "User";
      
      let module = new ModuleApp();
      module.name = "Xico";
      
      // module.entities = [];
      // module.entities.push(entity1);
      // entity1.fields = [];
      // entity1.fields.push(field2);
      // field2.properties = [];
      // field2.properties.push(prop1);

      result.modules.push(module);
    });
  }

}
