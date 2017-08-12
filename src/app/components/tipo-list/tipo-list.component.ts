import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { TipoUsuario } from '../../models/TipoUsuario';

@Component({
  selector: 'tipo-list',
  templateUrl: './tipo-list.component.html',
  styleUrls: ['./tipo-list.component.css']
})
export class TipoListComponent implements OnInit {

  types:TipoUsuario[];
  tableSettings = {
    columns: {
        id: {
          title: 'ID',
          editable:false
        },
        perfil: {
          title: 'Role'
        }
    },
    actions: {
      add:false,
      position:'right',

    },
    edit:{
        confirmSave:true,
        editButtonContent:'<i class="fa fa-pencil" aria-hidden="true"></i>'
    },
    delete:{
        confirmDelete:true,
        deleteButtonContent:'<i class="fa fa-trash" aria-hidden="true"></i>'
    }
     
  }
  
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserTypes().subscribe(types => {
      this.types = types;
    });
  }
  
  //---------- Table events handlers ----------
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(this.types);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.confirm.resolve(event.newData);
      console.log(this.types);
    } else {
      event.confirm.reject();
    }
  }
  //--------------------------------------------
}
