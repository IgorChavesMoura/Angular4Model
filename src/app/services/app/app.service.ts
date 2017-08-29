import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private _title:string = 'App do service';

  constructor() { 

  }

  public get title(){
    //Observable.of(this._title);
    return this._title;
  }


  public set title(title){
    this._title = title;
  }

}
