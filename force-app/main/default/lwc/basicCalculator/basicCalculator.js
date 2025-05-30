import { LightningElement } from 'lwc';

export default class BasicCalculator extends LightningElement {
    firstInput;
    secondInput;
    totalResult;
    showResult=false;
    firstInputChange(event){
        this.firstInput=event.target.value;
    }
    secondInputChange(event){
        this.secondInput = event.target.value;
    }
    add(event){
        this.totalResult=Number(this.firstInput)+Number(this.secondInput);
        this.showResult=true;
    }
    sub(event){
        this.totalResult=Number(this.firstInput)-Number(this.secondInput);
         this.showResult=true;
    }
    mul(event){
        this.totalResult=Number(this.firstInput)*Number(this.secondInput);
         this.showResult=true;
    }
    div(event){
        this.totalResult=Number(this.firstInput)/Number(this.secondInput);
         this.showResult=true;
    }
}