import { Component, OnInit, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../modal/modal.component';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-bootstrap-model',
  templateUrl: './bootstrap-model.component.html',
  styleUrls: ['./bootstrap-model.component.css']
})
export class BootstrapModelComponent implements OnInit {

  

  constructor(private modal:NgbModal, private userService:UserService) { 
     
  }

  ngOnInit() {
  }
  
  showUsers(){
    this.userService.getAllUsers().subscribe(usuarios => {
      console.log(usuarios);
    });
  }

  open() {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  

}
