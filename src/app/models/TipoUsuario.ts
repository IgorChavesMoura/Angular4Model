export class TipoUsuario{
    private _id:number;
    private _perfil:string;

    get id():number{
        return this._id;
    }
    set id(id:number){
        this._id = id;
    }

    get perfil():string{
        return this._perfil;
    }
    set perfil(perfil:string){
        this._perfil = perfil;
    }
}