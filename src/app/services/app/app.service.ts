import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private _title:string;

  constructor() { 
    this._title = 'App';
  }

  public get title(){
    return this._title;
  }

}
