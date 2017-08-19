import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { StyleHelper } from '../../helpers/StyleHelper';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	title = "Dragula test"; 

	public comps: Array<any> = [
	    {id: '1', label: 'comp1', type: 'comp1',  items: [], html:'<button type="button" class="btn btn-primary btn-block">Primary</button>'},
      {id: '2', label: 'comp2', type: 'comp2',  items: [], html: '<input type="text" class="form-control" placeholder="Text">'},
	    {id: '3', label: 'comp3', type: 'comp3',  items: [], html:'<div class="btn-group" role="group" aria-label="Basic example"> <button type="button" class="btn btn-secondary">Left</button> <button type="button" class="btn btn-secondary">Middle</button> <button type="button" class="btn btn-secondary">Right</button> </div>'},
      {id: '4', label: 'comp4', type: 'comp4',  items: [], html:'<div class="input-group"> <span class="input-group-addon" id="basic-addon1">@</span> <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"> </div>'},
      {id: '5', label: 'comp5', type: 'comp5',  items: [], html: '<div class="form-group"> <label for="exampleFormControlSelect1">Example select</label> <select class="form-control" id="exampleFormControlSelect1"> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> </select> </div>'},
      {id: '6', label: 'row', type: 'row',  items: [], html: ' <div class="form-row"> <div class="form-group col-md-4"> <label for="inputCity" class="col-form-label">City</label> <input type="text" class="form-control" id="inputCity"> </div> <div class="form-group col-md-4"> <label for="inputState" class="col-form-label">State</label> <select id="inputState" class="form-control">Choose</select> </div> <div class="form-group col-md-4"> <label for="inputZip" class="col-form-label">Zip</label> <input type="text" class="form-control" id="inputZip"> </div> </div>'}
      ];

  	public items: Array<any> = [
  		/*{id: '1', label: 'comp1', type: 'comp1',  items: []},*/
  	];


  constructor(private dragulaService: DragulaService) {

  	dragulaService.setOptions('bag-one', {
      copy: function (el, container, handle) {
      	let inComps = new RegExp('(?:^|\\s+)' + 'containerComps' + '(?:\\s+|$)').test(container.className);
      	console.log(container.className);
      	console.log("inComps: " + inComps);
      	return inComps;
      },

	    moves: function (el, container, handle) {
	  	  console.log(handle.className);
        //return handle.className === 'handle';
        //return new RegExp('(?:^|\\s+)' + 'containerItems' + '(?:\\s+|$)').test(container.className);
        return true;
      }



    });
	


    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(value);
      this.onDrop(value.slice(1));

      const [bagName, e, el] = value;
      console.log(e.dataset.id);

    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });


  }

 private onDrag(args) {
    let [e, el] = args;
    StyleHelper.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {



    let [el, target, source] = args;

    StyleHelper.addClass(el, 'ex-moved');
    

  }

  private onOver(args) {
    let [e, el, container] = args;
    StyleHelper.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    StyleHelper.removeClass(el, 'ex-over');
  }


  ngOnInit() {
  }

}
