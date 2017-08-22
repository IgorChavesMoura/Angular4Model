import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { StyleHelper } from '../../helpers/StyleHelper';

@Component({
  selector: 'app-entity-gen',
  templateUrl: './entity-gen.component.html',
  styleUrls: ['./entity-gen.component.css']
})
export class EntityGenComponent implements OnInit {

  public many: Array<any> = [
    { type: 'row', name:'Row' ,many: [] }

  ];
  public many2: Array<any> = [];

  public types: Array<any> = [
    { id: 0, type: 'text' },
    { id: 1, type: 'password' },  
    { id: 4, type: 'checkbox' },
    { id: 5, type: 'radio' },
    { id: 6, type: 'row' }
  ];

  public radioValues:Array<number> = [1,2,3,4,5];

  public selectedType = null;
  constructor(private dragula: DragulaService) {

  }



  ngOnInit() {

    this.dragula.setOptions('bag-one', {
      copy: (el, container, handle) => {
        console.log(container.className);
        let inModels = new RegExp('(?:^|\\s+)' + 'container-models' + '(?:\\s+|$)').test(container.className);
        return inModels;
      },
      accepts: (el, container, handle) => {
        let acceptable = new RegExp('(?:^|\\s+)' + 'acceptable' + '(?:\\s+|$)').test(el.className);

        return acceptable;
      },
      removeOnSpill: (el, container, handle) => {
        let removable = new RegExp('(?:^|\\s+)' + 'removable' + '(?:\\s+|$)').test(el.className);

        return removable;
      }
    });

    this.dragula.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    this.dragula.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
    this.dragula.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    this.dragula.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });

  }

  addField(fieldName) {
    console.log(fieldName);
    console.log(this.selectedType);

    this.many.push({
      type:this.selectedType,
      name:fieldName,
      title:fieldName
    });

  }
  compareTypesbyId(type1, type2) { //Function to select an active option if an user id was passed as param
    return type1 && type2 ? type1.id === type2.id : type1 === type2;
  }
  private onDropModel(args) {
    let [el, target, source] = args;
    console.log(this.many);
    console.log(this.many2);
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }
  private onOver(args) {
    let [e, el, container] = args;
    StyleHelper.addClass(el, 'ex-over');
  }
  private onOut(args) {
    let [e, el, container] = args;
    StyleHelper.removeClass(el, 'ex-over');
  }

}
