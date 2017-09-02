import { BaseAppClass } from "./BaseAppClass";
import { FieldApp } from "./FieldApp";

export class EntityApp extends BaseAppClass {

    private _fields: Array<FieldApp> = [];

	constructor() {
        super();
        this.model = "entity";
    }

    public get fields(): Array<FieldApp> {
        return this._fields;
    }

    public set fields(value: Array<FieldApp>) {
        this._fields = value;
    }
}