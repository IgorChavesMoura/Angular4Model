import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Headers, Http } from '@angular/http';
import { Application } from '../../models/Application';

@Injectable()
export class ApplicationService {


  public _application: Application = new Application();

  constructor(private http: Http) {
  }


  public getVehicles() {
    return Observable.interval(2200).map(i => [{ name: 'car 1' }, { name: 'car 2' }]);
  }

  public fetchModel(uuid: string = undefined) {
    // if (!uuid) {
    this._application.id = 1;
    this._application.name = "app3";
    this._application.version = 99;

    return Observable.of(this._application);


  }

  public teste1(num) {
    this._application.name = "xico " + num;
  }

  //return new Observable<Application>((subscriber: Subscriber<Application>) => subscriber.next(new Application())).map(o => JSON.stringify({id:1,name:"App1", version:1}));
  // } else {
  // return this.http.get("http://localhost:8080/myapp/api/application/" + uuid).map(res => res.text());
  // }
}
