import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula'

@Component({
    selector: 'app-system-models',
    templateUrl: './system-models.component.html',
    styleUrls: ['./system-models.component.css']
})
export class SystemModelsComponent implements OnInit {
    
    public selectedModule;
    public selectedEntity;
    public selectedField;
    public selectedProperty;
    
    constructor(private dragula: DragulaService) {
     //   dragula.deadzone = 5;

    }


    public modules: Array<any> = [
        {
            name: 'Users',
            entities: [
                {
                    name: 'User',
                    fields: [
                        { name: 'id', properties: ['Unique', 'Primary'] },
                        { name: 'name', properties: [] },
                        { name: 'birthday', properties: [] }]
                },
                {
                    name:'Type',
                    fields:[
                        { name: 'id', properties: ['Unique', 'Primary'] },
                        { name: 'name', properties: [] },
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
                        { name: 'id', properties: ['Unique', 'Primary'] },
                        { name: 'name', properties: [] },
                        { name: 'color', properties: [] },
                        { name: 'size', properties: [] },
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

    private selectModule(module) {
        this.selectedModule = module;
        this.selectedEntity = null;
        this.selectedField = null;
        this.selectedProperty = null;
    }

    private selectEntity(entity) {
        this.selectedEntity = entity;
        this.selectedField = null;
        this.selectedProperty = null;
    } 

    private selectField(field) {
        this.selectedField = field;
        this.selectedProperty = null;
    } 

    private selectProperty(property) {
        this.selectedProperty = property;
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
