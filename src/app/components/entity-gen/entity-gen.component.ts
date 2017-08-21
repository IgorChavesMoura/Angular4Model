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
    { tipo:'text', conteudo:'conteudo1' },
    { tipo:'checkbox', conteudo:'conteudo2' },
    { tipo:'radio', conteudo:'conteudo3' }
  
  ];
  public many2: Array<any> = [];

  constructor(private dragula: DragulaService) {

  }

  ngOnInit() {

    this.dragula.setOptions('bag-one',{
      copy:(el,container,handle)=>{
        console.log(container.className);
        let inModels = new RegExp('(?:^|\\s+)' + 'container-models' + '(?:\\s+|$)').test(container.className);
        return inModels;
      },
      accepts:(el,container,handle)=>{
        console.log(el);
        console.log(container);
        console.log(handle);
        let acceptable = new RegExp('(?:^|\\s+)' + 'acceptable' + '(?:\\s+|$)').test(el.className);

        return acceptable;
      },
      removeOnSpill:(el,container,handle)=>{
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
  private onDropModel(args) {
    let [el, target, source] = args;
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
