import { LightningElement } from 'lwc';

export default class ExploreTaxCalculator extends LightningElement {

    totalAmount;
    taxPercentage;

    handleChange(event){

        if (event.target.name === 'ta') {

            this.totalAmount = event.target.value;
            
        }
        else if(event.target.name === 'tp'){

            this.taxPercentage = event.target.value;
        }

       this.template.querySelector('c-explore-math').calculate(this.totalAmount,this.taxPercentage);

    }
}