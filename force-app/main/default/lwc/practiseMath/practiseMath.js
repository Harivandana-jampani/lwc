import { LightningElement,api } from 'lwc';

export default class PractiseMath extends LightningElement {
     totaltaxamount;
        
        @api calculate(ta,tp){
           this. totaltaxamount=(ta*tp)/100;
        }
}