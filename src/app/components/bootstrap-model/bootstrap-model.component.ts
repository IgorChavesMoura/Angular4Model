import { Component, OnInit, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../modal/modal.component';

import { UserService } from '../../services/user/user.service';

import { Router }  from '@angular/router';
@Component({
  selector: 'app-bootstrap-model',
  templateUrl: './bootstrap-model.component.html',
  styleUrls: ['./bootstrap-model.component.css']
})
export class BootstrapModelComponent implements OnInit {

  

  constructor(private modal:NgbModal, private router:Router) { 
     
  }

  ngOnInit() {
  }
  
  showUsers(){
    this.router.navigate(['/users']);
  }
  goToCreateUserPage(){
    this.router.navigate(['/users/create']);
  }
  goToTypesPage(){
    this.router.navigate(['/users/types']);
  }
  goToCreateTypePage(){
    this.router.navigate(['/users/types/create']);
  }
  open() {
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  

}
