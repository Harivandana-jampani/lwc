import { LightningElement } from 'lwc';

export default class PractiseTaxcalculator extends LightningElement {
    ta;
    tp;

    handleChange(event){
        if(event.target.name === 'ta'){
            this.ta=event.target.value;
        }
        if(event.target.name === 'tp'){
                this.tp=event.target.value;
            }
        this.template.querySelector('c-practise-math').calculate(this.ta,this.tp);
    }
}