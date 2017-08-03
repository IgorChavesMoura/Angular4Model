import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { TipoUsuario } from '../../models/TipoUsuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-form',
  templateUrl: './tipo-form.component.html',
  styleUrls: ['./tipo-form.component.css']
})
export class TipoFormComponent implements OnInit {

  userType:TipoUsuario;

  constructor(private userService:UserService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.userType = new TipoUsuario();

  }

  onSubmit(){
    this.userService.createUserType(this.userType).subscribe(response => console.log(response));
  }

  
}
