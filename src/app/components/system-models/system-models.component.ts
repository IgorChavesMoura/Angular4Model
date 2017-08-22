import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { StyleHelper } from '../../helpers/StyleHelper';

@Component({
    selector: 'app-system-models',
    templateUrl: './system-models.component.html',
    styleUrls: ['./system-models.component.css']
})
export class SystemModelsComponent implements OnInit {

    public selectedModuleId: number = 0;
    public selectedEntityId: number = 0;
    public selectedFieldId: number = 0;
    //  public selectedProperty;

    constructor(private dragulaService: DragulaService) {
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
    }


    public modules: Array<any> = [
        {
            name: 'Users',
            entities: [
                {
                    name: 'User',
                    fields: [
                        {
                            name: 'id',
                            type: '',
                            properties: ['Unique', 'Primary']
                        },
                        {
                            name: 'name',
                            type: '',
                            properties: []
                        },
                        {
                            name: 'birthday',
                            type: '',
                            properties: []
                        }]
                },
                {
                    name: 'Type',
                    fields: [
                        {
                            name: 'id',
                            type: '',
                            properties: ['Unique', 'Primary']
                        },
                        {
                            name: 'name',
                            type: '',
                            properties: []
                        },
                    ]
                }
            ]
        },
        {
            name: 'Products',
            entities: [
                {
                    name: 'Product',
                    fields: [
                        {
                            name: 'id',
                            type: '',
                            properties: ['Unique', 'Primary']
                        },
                        {
                            name: 'name',
                            type: '',
                            properties: []
                        },
                        {
                            name: 'color',
                            type: '',
                            properties: []
                        },
                        {
                            name: 'size',
                            type: '',
                            properties: []
                        },
                    ]
                }

            ]
        }
    ];


    public types: Array<any> = [
        {
            id: '1', label: 'String', type: 'string', icon: 'fa-usd', subs: [
                { id: '11', label: 'Email', type: 'email' },
            ]
        },
        {
            id: '2', label: 'Number', type: 'number', icon: 'fa-hashtag', subs: [
                { id: '21', label: 'Currency', type: 'currency' },
                { id: '22', label: 'Cpf', type: 'cpf' },
            ]
        },
        {
            id: '3', label: 'Boolean', type: 'boolean', icon: 'fa-check-square', subs: [
                { id: '31', label: 'Active', type: 'active' },
            ]
        },
        {
            id: '4', label: 'Date', type: 'date', icon: 'fa-calendar', subs: [
                { id: '41', label: 'Birthday', type: 'birthday' },
            ]
        },
        {
            id: '5', label: 'Enum', type: 'enum', icon: 'fa-list', subs: [
            ]
        },
        {
            id: '6', label: 'File', type: 'file', icon: 'fa-file-text', subs: [
            ]
        },


    ];

    private selectModule(index) {
        console.log('selectModule: ' + index);
        this.selectedModuleId = index;
        this.selectedEntityId = 0;
        this.selectedFieldId = 0;
        
    }

    private selectEntity(index) {
        console.log('selectEntity: ' + index);
        this.selectedEntityId = index;
        this.selectedFieldId = 0;
    }

    private selectField(index) {
        console.log('selectField: ' + index);
        this.selectedFieldId = index;
        
    }

    /*
        private selectProperty(property) {
            this.selectedProperty = property;
        }
    */
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
