import { BaseAppClass } from "./BaseAppClass";
import { PropertyApp } from "./PropertyApp";

export class FieldApp extends BaseAppClass {

    private _properties: Array<PropertyApp>  = [];

    public get properties(): Array<PropertyApp> {
        return this._properties;
    }

    public set properties(value: Array<PropertyApp>) {
        this._properties = value;
    }

}