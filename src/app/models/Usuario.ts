import { TipoUsuario } from "./TipoUsuario";

export class Usuario {
    private _nome: string;
    private _email: string;
    private _senha: string;
    private _rg: number;
    private _nascimento: string;
    private _tipo: TipoUsuario;

    get nome() {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }

    get email() {
        return this._email;
    }
    set email(email: string) {
        this._email = email;
    }

    get senha() {
        return this._senha;
    }
    set senha(senha: string) {
        this._senha = senha;
    }

    get rg() {
        return this._rg;
    }
    set rg(rg: number) {
        this._rg = rg;
    }

    get nascimento() {
        return this._nascimento;
    }
    set nascimento(nascimento: string) {
        this._nascimento = nascimento;
    }

    get tipo() {
        return this._tipo;
    }
    set tipo(tipo: TipoUsuario) {
        this._tipo = tipo;
    }




}