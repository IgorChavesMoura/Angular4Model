import { BaseAppClass } from "./BaseAppClass";
import { EntityApp } from "./EntityApp";

export class ModuleApp extends BaseAppClass{

    private _entities: Array<EntityApp>;

	public get entities(): Array<EntityApp> {
		return this._entities;
	}

	public set entities(value: Array<EntityApp>) {
		this._entities = value;
	}

}