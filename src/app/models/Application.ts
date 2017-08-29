export class Application {

    private _id: number;
    private _name: string;
    private _version: number;

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
}