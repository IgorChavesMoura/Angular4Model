import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Usuario } from '../../models/Usuario';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:Usuario[];
  tableSettings = {
      columns: {
        id: {
          title: 'ID',
          editable:false
        },
        nome: {
          title: 'Nome'
        },
        email: {
          title: 'Email'
        }
      },
      actions: {
        add:false,
        position:'right',
        custom:[
          {
            name:'editForm',
            title:'<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'

          }
        ]
      },
      edit:{
        confirmSave:true,
        editButtonContent:'<i class="fa fa-pencil" aria-hidden="true"></i>'
      },
      delete:{
        confirmDelete:true,
        deleteButtonContent:'<i class="fa fa-trash" aria-hidden="true"></i>'
      }
  };

  constructor(private userService:UserService, private router:Router) { 
      
  }

  ngOnInit() {
      this.userService.getAllUsers().subscribe(users => {
        this.users = users;
      });
  }
  
  //---------- Table events handlers ----------
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
      console.log(this.users);
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.confirm.resolve(event.newData);
      console.log(this.users);
    } else {
      event.confirm.reject();
    }
  }
  onCustomEdit(event) {
    console.log(event.data.id);
    this.router.navigate(['/users/edit',event.data.id]);
  }
  //--------------------------------------------


}
