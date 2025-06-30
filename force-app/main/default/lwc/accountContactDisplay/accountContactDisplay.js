import { LightningElement,api,wire } from 'lwc';
import getAllAccountWithContact from '@salesforce/apex/AccountContactWrapper.getAllAccountWithContact';
export default class AccountContactDisplay extends LightningElement {

    @api accountWithContact;
    @api error;
    @wire(getAllAccountWithContact)
     wiredAccountWithContacts({error,data}){
        if(data){
            console.log('data ==>'+JSON.stringify(data));
            this.accountWithContact = data;
        }
        else if (error){
            console.log(error);
            this.error=error;
        }
    }
}