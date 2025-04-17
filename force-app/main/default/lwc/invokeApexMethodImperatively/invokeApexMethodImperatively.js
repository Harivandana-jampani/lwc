import { LightningElement } from 'lwc';
import acclist from '@salesforce/apex/invokeApexmethodImperatively.acclist';
export default class InvokeApexMethodImperatively extends LightningElement {
 accounts;
 error;
 
    renderedCallback(){
    acclist()
    .then(result =>{
        this.accounts=result;
     })
     .catch(error =>{
        this.error=error;
     });
 }
 
}