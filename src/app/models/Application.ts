import { BaseAppClass } from "./BaseAppClass";
import { ModuleApp } from "./ModuleApp";

export class Application extends BaseAppClass{

    private _modules: Array<ModuleApp> = [];

	public get modules(): Array<ModuleApp> {
		return this._modules;
	}

	public set modules(value: Array<ModuleApp>) {
		this._modules = value;
	}
    

}