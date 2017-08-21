import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-entity-gen',
  templateUrl: './entity-gen.component.html',
  styleUrls: ['./entity-gen.component.css']
})
export class EntityGenComponent implements OnInit {

  public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  public many2: Array<string> = ['Explore', 'them'];

  constructor(private dragula:DragulaService) { 

  }

  ngOnInit() {
    this.dragula.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    this.dragula.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
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

}
