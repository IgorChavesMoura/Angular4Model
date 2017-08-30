import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../../services/app/app.service';

import { ModuleApp } from '../../models/ModuleApp';
import { EntityApp } from '../../models/EntityApp';
import { FieldApp } from '../../models/FieldApp';
import { PropertyApp } from '../../models/PropertyApp';

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

  constructor(public appService: AppService) {
  }

  ngOnInit() {
    console.log("## " + this.selectedProp + " this.selected: " + this.selected[this.selectedProp]);
  }


  public types: Array<any> = [
    { id: '10', label: 'String', type: 'string', icon: 'fa-align-left' },
    { id: '11', label: 'Email', type: 'string-email', icon: 'fa-envelope' },
    { id: '20', label: 'Number', type: 'number', icon: 'fa-hashtag' },
    { id: '21', label: 'Currency', type: 'number-currency', icon: 'fa-usd' },
    { id: '22', label: 'Cpf', type: 'number-cpf', icon: 'fa-user' },
    { id: '23', label: 'Color', type: 'number-color', icon: 'fa-square-o' },
    { id: '30', label: 'Boolean', type: 'boolean', icon: 'fa-check-square' },
    { id: '31', label: 'Active', type: 'boolean-active', icon: 'fa-check-square-o' },
    { id: '40', label: 'Date', type: 'date', icon: 'fa-calendar-o' },
    { id: '41', label: 'Birthday', type: 'date-birthday', icon: 'fa-calendar' },
    { id: '50', label: 'Enum', type: 'enum', icon: 'fa-list' },
    { id: '60', label: 'File', type: 'file', icon: 'fa-file-text' }
  ];

  public type(type: String) {
    let itemType: any = this.types.filter((item: any) => item.type === type);
    return itemType[0];
  }

  private addNew() {

    if (this.listItems == undefined) {
      this.listItems = [];
    }

    switch (this.selectedProp) {
      case "module": {
        let module = new ModuleApp();
        module.name = "new";
        module.entities = [];
        this.listItems.push(module);
        break;
      }
      case "entity": {
        let entity: EntityApp = new EntityApp();
        entity.name = "new";
        entity.fields = [];
        this.listItems.push(entity);
        break;
      }
      case "field": {
        let field: FieldApp = new FieldApp();
        field.name = "new";
        field.properties = [];
        this.listItems.push(field);
        break;
      }
      case "property": {
        let prop: PropertyApp = new PropertyApp();
        prop.name = "new";
        prop.type = "number";
        this.listItems.push(prop);
        break;
      }
    }
  }

  private selectItem(index) {

    switch (this.selectedProp) {
      case "module": {
        this.selected["entity"] = 0;
        this.selected["field"] = 0;
        this.selected["property"] = 0;
        break;
      }
      case "entity": {
        this.selected["field"] = 0;
        this.selected["property"] = 0;
        break;
      }
      case "field": {
        this.selected["property"] = 0;
        break;
      }
    }



    this.selected[this.selectedProp] = index;
  }

}
