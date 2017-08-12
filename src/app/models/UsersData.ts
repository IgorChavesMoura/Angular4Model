export class UsersData{
    private _id:number;
    private _numberOfUsers:number;
    private _time:string;

    get id(){
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get numberOfUsers(){
        return this._numberOfUsers;
    }
    set numberOfUsers(numberOfUsers:number){
        this._numberOfUsers = numberOfUsers;
    }
    
    get time(){
        return this._time;
    }
    set time(time:string){
        this._time = time;
    }
}