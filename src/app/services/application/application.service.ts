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


  public _application: Application = new Application();

  constructor(private http: Http) {
  }


  public fetchApplication(uuid: string = undefined) {
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


    // let json = {
    //   "id": 1,
    //   "name": "App Test 1",
    //   "version": 99,
    //   "modules": [
    //     {
    //       "name": "Users",
    //       "entities": [
    //         {
    //           "name": "User",
    //           "fields": [
    //             {
    //               "name": "Name",
    //               "properties": [
    //                 {
    //                   "name": "Number"
    //                 }
    //               ]
    //             },
    //             {
    //               "properties": [
    //                 {
    //                   "name": "String"
    //                 }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // };

    this._application = new Application();


    this._application.id = 1;
    this._application.name = "App Test 1";
    this._application.version = 99;

    let prop1: PropertyApp = new PropertyApp();
    prop1.name = "String";

    let prop2: PropertyApp = new PropertyApp();
    prop2.name = "Number";

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


    return Observable.of(this._application);
   
    // }

    //return this.http.get("http://localhost:8080/myapp/api/application/" + uuid).map(res => res.text());
  }
}
