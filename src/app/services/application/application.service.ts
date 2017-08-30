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


  //   public copyModules: Array<any> = [
  //     {
  //         name: 'Module type 1',
  //         entities: [
  //             {
  //                 name: 'User',
  //                 fields: [
  //                     {
  //                         name: 'id',
  //                         type: 'number',
  //                         properties: ['Unique', 'Primary']
  //                     }]
  //             }
  //         ]
  //     },
  //     {
  //         name: 'Module type 2'
  //     },
  // ]

  constructor(private http: Http) {

    this._application = new Application();


    this._application.id = 1;
    this._application.name = "App Test 1";
    this._application.version = 1;

    let prop1: PropertyApp = new PropertyApp();
    prop1.name = "String";
    prop1.type = "string";

    let prop2: PropertyApp = new PropertyApp();
    prop2.name = "Number";
    prop2.type = "number";

    let field1: FieldApp = new FieldApp();
    field1.name = "Id";

    let field2: FieldApp = new FieldApp();
    field2.name = "Name";

    let entity1: EntityApp = new EntityApp();
    entity1.name = "User";

    let module1: ModuleApp = new ModuleApp();
    module1.name = "Users";

    let module2: ModuleApp = new ModuleApp();
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


  public fetchCopyModules(uuid: string = undefined) {
    return Observable.of(this._copyModules);
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
}
