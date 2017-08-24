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

        dragulaService.setOptions('bag1', {
            copy: function (el, container, handle) {
                let inComps = new RegExp('(?:^|\\s+)' + 'copyable' + '(?:\\s+|$)').test(el.className);
                return inComps;
            }
            //,removeOnSpill: true

            
        });

    }

    public copyModules: Array<any> = [
        {
            name: 'Module type 1',
            entities: [
                {
                    name: 'User',
                    fields: [
                        {
                            name: 'id',
                            type: 'number',
                            properties: ['Unique', 'Primary']
                        }]
                }
            ]
        },
    ]

    public modules: Array<any> = [
        {
            name: 'Users',
            entities: [
                {
                    name: 'User',
                    fields: [
                        {
                            name: 'id',
                            type: 'number',
                            properties: ['Unique', 'Primary']
                        },
                        {
                            name: 'name',
                            type: 'string',
                            properties: []
                        },
                        {
                            name: 'email',
                            type: 'string-email',
                            properties: []
                        },
                        {
                            name: 'birthday',
                            type: 'date-birthday',
                            properties: []
                        }]
                },
                {
                    name: 'Type',
                    fields: [
                        {
                            name: 'id',
                            type: 'number',
                            properties: ['Unique', 'Primary']
                        },
                        {
                            name: 'name',
                            type: 'string',
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
                            type: 'number',
                            properties: ['Unique', 'Primary']
                        },
                        {
                            name: 'name',
                            type: 'string'
                        },
                        {
                            name: 'color',
                            type: 'number-color',
                            properties: []
                        },
                        {
                            name: 'size',
                            type: 'number',
                            properties: []
                        },
                        {
                            name: 'value',
                            type: 'number-currency',
                            properties: []
                        }
                    ]
                },
                {
                    name: 'Type',
                    fields: [
                        {
                            name: 'id',
                            type: 'number',
                            properties: ['Unique', 'Primary']
                        },
                        {
                            name: 'name',
                            type: 'string',
                            properties: []
                        },
                    ]
                }

            ]
        }
    ];



    private selectModule(index) {
        console.log('selectModule: ' + index);
        this.selectedModuleId = index;
        //this.selectedEntityId = 0;
        //this.selectedFieldId = 0;

    }

    private selectEntity(index) {
        console.log('selectEntity: ' + index);
        this.selectedEntityId = index;
        //this.selectedFieldId = 0;
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

    public types: Array<any> = [
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
        let itemType: any = this.types.filter((item: any) => item.type === type);
        return itemType[0];
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
