import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { TipoUsuario } from '../../models/TipoUsuario';
import { UserService } from '../../services/user/user.service';
import { MaskService } from '../../services/mask/mask.service';
import { DateHelper } from '../../helpers/DateHelper';
import { PasswordHelper } from '../../helpers/PasswordHelper';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  datepickerResult:any;
  user:Usuario;
  userTypes:TipoUsuario[];
  selectedType:TipoUsuario;
  notFoundMessage:string;
  datepickerBounds:any;
  passwordConfirm:string;
  passwordInvalid:boolean;
  confirmInvalid:boolean;
  nameInvalid:boolean;
  emailInvalid:boolean;
  rgInvalid:boolean;
  

  constructor(private userService:UserService, private route:ActivatedRoute,
              private maskService:MaskService) {
    
  }

  ngOnInit() {
    
    this.datepickerBounds = DateHelper.setDatepickerBounds();
    console.log(this.datepickerBounds);

    this.userService.getUserTypes().subscribe(types => {
      this.userTypes = types;
    });

    this.route.params.subscribe(params => {
      if(params['id']){   //Check if an user id was passed, if yes then the form will get the user
        this.userService.getUser(params['id'])
        .subscribe(
          (user:Usuario) => {
            console.log(user);
            this.datepickerResult = DateHelper.epochToDatepickerResult(user.nascimento);
            this.user = user;
            this.selectedType = user.tipo

          },
          error => {
            this.notFoundMessage = 'User not found :('; //Handling the 404 response from Spring
        });
      } else {
        this.user = new Usuario();
      }
    });
  }
  compareTypesbyId(type1:TipoUsuario, type2:TipoUsuario){ //Function to select an active option if an user id was passed as param
    return type1 && type2 ? type1.id === type2.id : type1 === type2; 
  }
  onSubmit(){ 
    if(this.avaliableToSend()){

      this.user.nascimento = DateHelper.datepickerResultToText(this.datepickerResult);
      this.user.tipo = this.selectedType;
      this.userService.createUser(this.user).subscribe(response => {
        console.log(response);
      });
    } else {
      this.passwordInvalid = PasswordHelper.passwordInvalid(this.user.senha);
      this.confirmInvalid = !PasswordHelper.confirmValid(this.user.senha,this.passwordConfirm);
      this.nameInvalid = !this.nameAvaliableToSend();
      this.emailInvalid = !this.emailAvaliableToSend();
      this.rgInvalid = !this.rgAvaliableToSend();
    }

    
  }
  passHasStrength(){
    return PasswordHelper.calculatePassStrength(this.user.senha) >= 3;
  }
  passInvalidShow(){ //Show the red border in the password input
    return PasswordHelper.showInvalidPassword(this.user.senha);
  }
  confirmInvalidShow(){ //Show the red border in the password input
    return PasswordHelper.showInvalidConfirm(this.user.senha, this.passwordConfirm);
  }
  confirmValidShow(){
    return PasswordHelper.showValidConfirm(this.user.senha, this.passwordConfirm);
  }
  passMatchConfirm(){
    return PasswordHelper.passMatchConfirm(this.user.senha,this.passwordConfirm);
  }
  passAvaliableToSend(){
    return !(PasswordHelper.passwordInvalid(this.user.senha)) && (PasswordHelper.passMatchConfirm(this.user.senha,this.passwordConfirm));
  }
  getRgMask(){
    return this.maskService.rgMask;
  }
  
  //Here we check if form is avaliable to send 

  nameAvaliableToSend(){
    return this.user.nome != null && this.user.nome.length > 0;
  }
  emailAvaliableToSend(){
    return this.user.email != null && this.user.email.length > 0;
  }
  rgAvaliableToSend(){
    return this.user.rg != null && this.user.rg > 0;
  }
  avaliableToSend(){
    return this.passAvaliableToSend() && this.nameAvaliableToSend() && this.emailAvaliableToSend() && this.rgAvaliableToSend();
  }

}

