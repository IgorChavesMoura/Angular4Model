export class BaseAppClass {

    private _id: number;
    private _name: string;
    private _version: number;
    private _type: string;
    private _order: number;
    private _lock: boolean;
    private _model: string;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get version(): number {
        return this._version;
    }

    public set version(value: number) {
        this._version = value;
    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }

    public get order(): number {
        return this._order;
    }

    public set order(value: number) {
        this._order = value;
    }

    public get lock(): boolean {
        return this._lock;
    }

    public set lock(value: boolean) {
        this._lock = value;
    }

	public get model(): string {
		return this._model;
	}

	public set model(value: string) {
		this._model = value;
	}
    
}