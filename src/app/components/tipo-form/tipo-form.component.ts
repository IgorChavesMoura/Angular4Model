import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { TipoUsuario } from '../../models/TipoUsuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tipo-form',
  templateUrl: './tipo-form.component.html',
  styleUrls: ['./tipo-form.component.css']
})
export class TipoFormComponent implements OnInit {

  userType:TipoUsuario;
  notFoundMessage:string;

  constructor(private userService:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']){
        this.userService.getUserType(params['id']).subscribe(
            (type:TipoUsuario) => {
              this.userType = type;
            },
            error => {
              this.notFoundMessage = 'User type not found :(';
            }
        );
      } else {
        this.userType = new TipoUsuario();
      }
    });


    

  }

  onSubmit(){
    this.userService.createUserType(this.userType).subscribe(response => console.log(response));
  }

  
}
