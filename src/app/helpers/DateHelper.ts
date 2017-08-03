export class DateHelper { 
    static datepickerResultToText(datepickerResult:any){
        return `${datepickerResult.year}/${datepickerResult.month}/${datepickerResult.day}`;
    }
    static epochToDatepickerResult(epoch){
        let date = new Date(0);
        date.setUTCMilliseconds(epoch);
        
        let month = date.getMonth();
        month++;
        
        return { 'year':date.getFullYear(),'month':month, 'day':date.getDay() };
    }
    static setDatepickerBounds(){
        let currentDate = new Date();
        
        let currentMonth = currentDate.getMonth();
        currentMonth++; //Date object month is between 0 and 11, so we have to add 1

        let minYear = currentDate.getFullYear();
        minYear = minYear - 150; //
 
        let maxDate = { 'year':currentDate.getFullYear(),'month':currentMonth, 'day':currentDate.getDay()  };
        let minDate = { 'year':minYear , 'month':1, 'day':1 }; 
        let bounds = { 'min':minDate , 'max':maxDate };

        return bounds;
    }
}