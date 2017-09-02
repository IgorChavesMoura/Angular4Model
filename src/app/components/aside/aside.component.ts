import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './../../services/application/application.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  // private editInstance: any;

  private fieldTypes: any;
  private propertyTypes: any;

  private props: Array<object> = [
    // {prop:"id", editable:false, icon:"fa-hashtag"},
    { prop: "name", editable: true, icon: "fa-id-card-o" },
    // {prop:"version", editable:true, icon:"fa-tree"},
    // {prop:"type", editable:true, icon:"fa-text-height"},
    // {prop:"order", editable:false, icon:"fa-sort"},
    // {prop:"lock", editable:false, icon:"fa-lock"},
    // {prop:"model", editable:false, icon:"fa-address-book"}
  ];

  constructor(public applicationService: ApplicationService) { }

  ngOnInit() {
    // this.applicationService.fetchEditInstance().subscribe(result => {
    //   this.editInstance = result;
    // });

    this.applicationService.fetchFieldTypes().subscribe(result => {
      this.fieldTypes = result;
    });

    this.applicationService.fetchPropertyTypes().subscribe(result => {
      this.propertyTypes = result;
    });
  }

  private editInstance(){
    return this.applicationService._editInstance;
  }

  private selectItem(item) {
    this.applicationService._editInstance.type = item.type;
  }

}
