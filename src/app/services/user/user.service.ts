import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Usuario } from '../../models/Usuario';
import { TipoUsuario } from '../../models/TipoUsuario';
import { UsersData } from '../../models/UsersData';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/usuario';
  private typesUrl = `${this.usersUrl}/tipos`;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  getAllUsers():Observable<Usuario[]>{
    return this.http.get(this.usersUrl).map(response => response.json() as Usuario[]);
  }
  getUsersData():Observable<UsersData[]>{
    let usersDataUrl = `${this.usersUrl}/data`;

    return this.http.get(usersDataUrl).map(response => response.json() as UsersData[]);
  }
  createUser(user:Usuario):Observable<any>{
    let userReqBody = JSON.stringify({
                    'nome':user.nome,
                    'email':user.email,
                    'senha':user.senha,
                    'rg':user.rg,
                    'nascimento':user.nascimento,
                    'tipo':user.tipo
                  });
    return this.http.post(this.usersUrl,userReqBody,{headers:this.headers});
  }
  getUser(id:string):Observable<Usuario>{
    let userUrl = `${this.usersUrl}/${id}`;
    return this.http.get(userUrl).map(response => {
        return response.json() as Usuario;    
    });
  }
  getUserTypes():Observable<TipoUsuario[]>{
    
    return this.http.get(this.typesUrl).map(response => response.json() as TipoUsuario[]);
  }
  
  getUserType(id:string):Observable<TipoUsuario>{
    let typeUrl = `${this.typesUrl}/${id}`;
    return this.http.get(typeUrl).map(response => {
        return response.json() as TipoUsuario;
    });
  }
  createUserType(type:TipoUsuario):Observable<any>{
    let typeReqBody = JSON.stringify({
                        'perfil':type.perfil
                    });
    return this.http.post(this.typesUrl,typeReqBody,{headers:this.headers});                 
  }
  private handleError(error: any): void {
    console.error('An error occurred', error); //debug 
  }
}
