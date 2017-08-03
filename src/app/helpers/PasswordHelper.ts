export class PasswordHelper{
    
    static passMatchConfirm(password:string,confirm:string):boolean{
        return password === confirm;
    }

    static hasEnoughLength(password:string):boolean{
        if(password){
            return password.length >= 6;
        }
        return false;
    }
    
    static hasLowerAndUpper(password:string):boolean{
        return /([a-z].*[A-Z])|([A-Z].*[a-z])/.test(password);
    }
    
    static hasNumber(password:string):boolean{
        return /([0-9])/.test(password);
    }
    
    static hasOneSpecialCharacter(password:string):boolean{
        return /([!,%,&,@,#,$,^,*,?,_,~])/.test(password);
    }
    
    static hasTwoSpecialCharacters(password:string):boolean{
        return /(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/.test(password);
    }

    static calculatePassStrength(password:string):number{
        let strength:number = 0;

        if(PasswordHelper.hasEnoughLength(password)){
            strength++;
        }
        if(PasswordHelper.hasLowerAndUpper(password)){
            strength++;
        }
        if(PasswordHelper.hasNumber(password)){
            strength++;
        }
        if(PasswordHelper.hasOneSpecialCharacter(password)){
            strength++;
        }
        if(PasswordHelper.hasTwoSpecialCharacters(password)){
            strength++;
        }

        return strength;
    }
    static passwordInvalid(password:string):boolean{
        return (PasswordHelper.calculatePassStrength(password) < 3) || (password == null); 
    }
    
    static showInvalidPassword(password:string):boolean{
        return !(PasswordHelper.calculatePassStrength(password) >= 3) && password != null;
    }
    static showInvalidConfirm(password:string,confirm:string):boolean{
        return !(PasswordHelper.passMatchConfirm(password,confirm)) && password != null;
    }
    static showValidConfirm(password:string,confirm:string):boolean{
        return (PasswordHelper.passMatchConfirm(password,confirm)) && (confirm != null) && (confirm.length > 0);
    }
    static confirmValid(password:string,confirm:string):boolean{
        return PasswordHelper.passMatchConfirm(password,confirm) && confirm != null;
    }
}