import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Headers, Http } from '@angular/http';

import { Application } from '../../models/Application';
import { ModuleApp } from '../../models/ModuleApp';
import { EntityApp } from '../../models/EntityApp';
import { FieldApp } from '../../models/FieldApp';
import { PropertyApp } from '../../models/PropertyApp';

@Injectable()
export class ApplicationService {

  private _application: Application = new Application();

  private _copyModules: Array<ModuleApp>;

  public _aside: boolean = false;

  public _editInstance: any;

  public _editList: any;

  public fieldTypes: Array<any> = [
    { id: '101', label: 'String', type: 'string', icon: 'fa-align-left' },
    { id: '102', label: 'Number', type: 'number', icon: 'fa-hashtag' },
    { id: '103', label: 'Boolean', type: 'boolean', icon: 'fa-check-square' },
    { id: '104', label: 'Date', type: 'date', icon: 'fa-calendar-o' },
    { id: '105', label: 'Enum', type: 'enum', icon: 'fa-list-ol' },
    { id: '106', label: 'File', type: 'file', icon: 'fa-file-text' },
    { id: '107', label: 'List', type: 'list', icon: 'fa-list' },
    { id: '108', label: 'Class', type: 'class', icon: 'fa-link' }
  ];

  public propertyTypes: Array<any> = [
    { id: '501', field: 'string', label: 'Email', type: 'string-email', icon: 'fa-envelope' },
    { id: '502', field: 'number', label: 'Currency', type: 'number-currency', icon: 'fa-usd' },
    { id: '503', field: 'number', label: 'Cpf', type: 'number-cpf', icon: 'fa-user' },
    { id: '504', field: 'number', label: 'Color', type: 'number-color', icon: 'fa-square-o' }
  ];

  constructor(private http: Http) {

    this._application = new Application();


    this._application.id = 1;
    this._application.name = "App Test 1";
    this._application.version = 1;

    let prop1: PropertyApp = new PropertyApp();
    prop1.id = 1;
    prop1.name = "String";
    prop1.type = "string";
    
    let prop2: PropertyApp = new PropertyApp();
    prop2.id = 2;
    prop2.name = "Number";
    prop2.type = "number";
    prop2.lock = true;
    
    let field1: FieldApp = new FieldApp();
    field1.id = 1;
    field1.name = "Id";
    field1.type = "number";
    
    let field2: FieldApp = new FieldApp();
    field2.id = 2;
    field2.name = "Name";
    field2.lock = true;
    field2.type = "string";
    
    let entity1: EntityApp = new EntityApp();
    entity1.id = 1;
    entity1.name = "User";
    
    let module1: ModuleApp = new ModuleApp();
    module1.id = 1;
    module1.name = "Users";
    
    let module2: ModuleApp = new ModuleApp();
    module2.id = 2;
    module2.name = "Products";

    field1.properties = [prop2];
    field2.properties = [prop1];

    entity1.fields = [field1, field2];

    module1.entities = [entity1];

    this._application.modules = [module1, module2];



    let exampleEntity1: EntityApp = new EntityApp();
    exampleEntity1.name = "User";
    let exampleEntity2: EntityApp = new EntityApp();
    exampleEntity2.name = "Product";



    let exampleModule1: ModuleApp = new ModuleApp();
    exampleModule1.name = "Example1";
    exampleModule1.id = 0;
    exampleModule1.version = 0;
    exampleModule1.entities = [exampleEntity1];


    let exampleModule2: ModuleApp = new ModuleApp();
    exampleModule2.name = "Example2";
    exampleModule2.id = 0;
    exampleModule2.version = 0;
    exampleModule2.entities = [exampleEntity2];

    this._copyModules = [module1, module2];
  }

  public printTypeNames<T>() {
    console.log("printTypeNames()" + typeof (this._editInstance));
    let obj = this._editInstance;

    let returnArray = [];


    const objectKeys = Object.keys(obj) as Array<keyof T>;
    for (let key of objectKeys) {
      if (typeof (obj[key]) != "object") {
        returnArray.push(key);
      }
    }

    return returnArray;
  }

  public fetchCopyModules(uuid: string = undefined) {
    return Observable.of(this._copyModules);
  }

  public fetchFieldTypes() {
    return Observable.of(this.fieldTypes);
  }

  public fetchPropertyTypes() {
    return Observable.of(this.propertyTypes);
  }


  

  public fetchApplication(uuid: string = undefined) {
    return Observable.of(this._application);
    // if (!uuid) {


    // return this.http.get("/app/assets/data/application.json").map(success => this._application = success.json() as Application);

    // this.http.get("/app/assets/data/application.json").subscribe((success) => {
    //     console.log("success 1")  ;
    //     this._application = success.json() as Application;
    //     console.log(this._application);
    //   });

    //   console.log("Ahhh 2")  ;

    //   return Observable.of(this._application);

    // this.http.get("/app/assets/data/application.json").subscribe((success) => {
    //   console.log("success");
    //   this._application = success.json() as Application;
    //   console.log(this._application);
    // });

    // return Observable.of(this._application);



    // }

    //return this.http.get("http://localhost:8080/myapp/api/application/" + uuid).map(res => res.text());
  }

  public fetchAside() {
    return Observable.of(this._aside);
  }
  public fetchEditInstance() {
    return Observable.of(this._editInstance);
  }
}
