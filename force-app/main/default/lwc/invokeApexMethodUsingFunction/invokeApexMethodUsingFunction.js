import { LightningElement,wire} from 'lwc';
import fetchAccounts from '@salesforce/apex/invokeApexWithFunction.fetchAccounts';
import InvokeApexMethodWithFunction from '@salesforce/apex/invokeApexWithFunction.fetchAccounts'
export default class InvokeApexMethodUsingFunction extends LightningElement {

    accounts;
    error;
    @wire(fetchAccounts) 
    wiredAccounts({error,data}){
        console.log('data is ===>'+JSON.stringify(data));
        if(data){
            this.accounts=data;
            console.log('data are ===>'+JSON.stringify(data));
           // console.log('data is'+JSON.stringify(data));
        }else if(error){
            this.error=error;
           // this.accounts=undefined;
        }
    }
}