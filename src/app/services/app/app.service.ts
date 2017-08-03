import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private _title:string = 'App';

  constructor() { 

  }

  public get title(){
    return this._title;
  }


}
