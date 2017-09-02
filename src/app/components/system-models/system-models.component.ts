import { Component, OnInit, ViewChild } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { StyleHelper } from '../../helpers/StyleHelper';
import { AppService } from './../../services/app/app.service';
import { ApplicationService } from './../../services/application/application.service';
import { ListDraggableComponent } from "../list-draggable/list-draggable.component";

import { Observable } from 'rxjs';
import { Application } from '../../models/Application';
import { ModuleApp } from '../../models/ModuleApp';

@Component({
    selector: 'app-system-models',
    templateUrl: './system-models.component.html',
    styleUrls: ['./system-models.component.css', './system-models.component-base.css'],
    providers: [ApplicationService]
})
export class SystemModelsComponent implements OnInit {
    
    public isCollapsed: boolean = true;
    
    private aside: boolean = false;
    private editInstance: any;
    
    vehicles: Observable<Array<any>>;
    
    application: Application;
    
    copyModules: Array<ModuleApp>;
    
    subscription: any;
    
    public selected: object = {
        module: 0,
        entity: 0,
        field: 0,
        property: 0
    };

    @ViewChild("bag1") bag1: ListDraggableComponent;
    @ViewChild("bag2") bag2: ListDraggableComponent;
    @ViewChild("bag3") bag3: ListDraggableComponent;
    @ViewChild("bag4") bag4: ListDraggableComponent;

    constructor(private dragulaService: DragulaService, public appService: AppService, public applicationService: ApplicationService) {

        dragulaService.drag.subscribe((value) => {
            this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe((value) => {
            this.onDrop(value.slice(1));
            //const [bagName, e, el] = value;
        });
        dragulaService.over.subscribe((value) => {
            this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe((value) => {
            this.onOut(value.slice(1));
        });

        dragulaService.setOptions('bag1', {
            copy: function (el, container, handle) {
                let inComps = new RegExp('(?:^|\\s+)' + 'copyable' + '(?:\\s+|$)').test(el.className);
                return inComps;
            }
            //,removeOnSpill: true


        });

        


    }


    ngOnInit() {

        this.applicationService.fetchApplication().subscribe(result => {
            this.application = result;
        });

        this.applicationService.fetchCopyModules().subscribe(result => {
            this.copyModules = result;
        });

        this.applicationService.fetchAside().subscribe(result => {
            console.log("teste1");
            this.aside = result;
        });

        this.applicationService.fetchEditInstance().subscribe(result => {
            console.log("teste2");
            this.editInstance = result;
        });

        // this.applicationService.getApplication.subscribe(application => this.application = application);
    }


    // public copyModules: Array<any> = [
    //     {
    //         name: 'Module type 1',app-aside
    //         entities: [
    //             {
    //                 name: 'User',
    //                 fields: [
    //                     {
    //                         name: 'id',
    //                         type: 'number',
    //                         properties: ['Unique', 'Primary']
    //                     }]
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Module type 2'
    //     },
    // ]

    public copyEntities: Array<any> = [
        {
            name: 'Entity 1',
            fields: [
                {
                    name: 'id',
                    type: 'number',
                    properties: ['Unique', 'Primary']
                }]
        }
    ]

    public copyFields: Array<any> = [
        {
            name: 'id',
            type: 'number',
            properties: []
        },
        {
            name: 'name',
            type: 'string',
            properties: []
        }
    ]

    public copyProperties: Array<any> = [
        'Unique', 'Primary'
    ]

   

    // public aside: boolean = false;


    // private myFunction(index) {
    //     this.aside = !this.aside;
    //     console.log('myFunction: ' + index);
    // }

    // private selectModule(index) {
    //     console.log('selectModule: ' + index);
    //     this.selectedModuleId = index;



    //     //this.selectedEntityId = 0;
    //     //this.selectedFieldId = 0;

    // }

    // private selectEntity(index) {
    //     console.log('selectEntity: ' + index);
    //     this.selectedEntityId = index;
    //     //this.selectedFieldId = 0;
    // }

    // private selectField(index) {
    //     console.log('selectField: ' + index);
    //     this.selectedFiethis.subscription = this.navService.getNavChangeEmitter()

    // }

    /*
        private selectProperty(property) {
            this.selectedProperty = property;
        }
    */
    private onDrag(args) {
       // let [e, el] = args;
       // StyleHelper.removeClass(e, ' ex-moved ');
    }

    private onDrop(args) {

        //let [e, el, target, source] = args;


        // StyleHelper.addClass(el, ' ex-moved ');



    }

    private onOver(args) {
        let [e, el, container] = args;
        StyleHelper.addClass(el, ' ex-over ');
    }

    private onOut(args) {
        let [e, el, container] = args;
        StyleHelper.removeClass(el, ' ex-over ');
    }

    public types1: Array<any> = [
        { id: '10', label: 'String', type: 'string', icon: 'fa-align-left' },
        { id: '11', label: 'Email', type: 'string-email', icon: 'fa-envelope' },
        { id: '20', label: 'Number', type: 'number', icon: 'fa-hashtag' },
        { id: '21', label: 'Currency', type: 'number-currency', icon: 'fa-usd' },
        { id: '22', label: 'Cpf', type: 'number-cpf', icon: 'fa-user' },
        { id: '23', label: 'Color', type: 'number-color', icon: 'fa-square-o' },
        { id: '30', label: 'Boolean', type: 'boolean', icon: 'fa-check-square' },
        { id: '31', label: 'Active', type: 'boolean-active', icon: 'fa-check-square-o' },
        { id: '40', label: 'Date', type: 'date', icon: 'fa-calendar-o' },
        { id: '41', label: 'Birthday', type: 'date-birthday', icon: 'fa-calendar' },
        { id: '50', label: 'Enum', type: 'enum', icon: 'fa-list' },
        { id: '60', label: 'File', type: 'file', icon: 'fa-file-text' }
    ];

    public type(type: String) {

        console.log("type: " + type);


        let itemType: any = this.types1.filter((item: any) => item.type === type);

        console.log(itemType[0]);

        return itemType[0];
    }


    /*
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
    */
}
