import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Usuario } from '../../models/Usuario';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/usuario';

  constructor(private http:Http) { }

  getAllUsers():Observable<Usuario[]>{
    return this.http.get(this.userUrl).map(response => response.json() as Usuario[]);
  }


  private handleError(error: any): void {
    console.error('An error occurred', error); //debug 
  }
}
