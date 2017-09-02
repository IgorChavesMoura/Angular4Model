import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from './../../services/app/app.service';

import { ApplicationService } from './../../services/application/application.service';

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

  @Output() sheldon: EventEmitter<any> = new EventEmitter();
  
  private aside: boolean;
  private editInstance: any;

  private fieldTypes: Array<any>;
  private propertyTypes: Array<any>;

  constructor(public appService: AppService, public applicationService: ApplicationService) {
    this.applicationService.fetchAside().subscribe(result => {
      this.aside = result;
    });

    this.applicationService.fetchEditInstance().subscribe(result => {
      this.editInstance = result;
    });

    this.applicationService.fetchFieldTypes().subscribe(result => {
      this.fieldTypes = result;
    });

    this.applicationService.fetchPropertyTypes().subscribe(result => {
      this.propertyTypes = result;
    });
  }

  ngOnInit() {
    console.log("## " + this.selectedProp + " this.selected: " + this.selected[this.selectedProp]);
  }

  public type(type: String) {
    
    var allTypes = this.fieldTypes.concat(this.propertyTypes);
    
   // var allTypes = checkOil((<Vehicle[]>buses).concat(trucks));
   // console.log(result)





    let itemType: any = allTypes.filter((item: any) => item.type === type);
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
        module.id = this.listItems.length ;

        this.selected["module"] = this.listItems.length - 1;
        this.selectItem(this.selected["module"], module);
        break;
      }
      case "entity": {
        let entity: EntityApp = new EntityApp();
        entity.name = "new";
        entity.fields = [];
        this.listItems.push(entity);
        entity.id = this.listItems.length ;


        let fieldId: FieldApp = new FieldApp();
        fieldId.name = "id";
        fieldId.type = "number";
        fieldId.lock = true;
        fieldId.properties = [];
        entity.fields.push(fieldId);



        this.selected["entity"] = this.listItems.length - 1;
        this.selectItem(this.selected["entity"], entity);
        break;
      }
      case "field": {
        let field: FieldApp = new FieldApp();
        field.name = "new";
        field.type = "string";
        field.properties = [];
        this.listItems.push(field);
        field.id = this.listItems.length ;

        this.selected["field"] = this.listItems.length - 1;
        this.selectItem(this.selected["field"], field);
        break;
      }
      case "property": {
        let property: PropertyApp = new PropertyApp();
        property.name = "new";
        property.type = "number";
        this.listItems.push(property);
        property.id = this.listItems.length ;

        this.selected["property"] = this.listItems.length - 1;
        this.selectItem(this.selected["property"], property);
        break;
      }
    }
  }

  public isSelected(item){
        
    if (this.applicationService._editInstance == item){
      return true;
    }
    
    return false;
  }

  private selectItem(index, item) {

    this.applicationService._editList = this; 
    
    this.applicationService._editInstance = item as ModuleApp;
    
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

  // public dblclick(item) {

  //   this.sheldon.emit(null);

  //   this.applicationService._editInstance = item;
  //   this.aside = !this.aside;

  //   console.log(this.applicationService._editInstance);
  // }

}
