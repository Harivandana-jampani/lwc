import { LightningElement ,wire} from 'lwc';
import fetchAllContacts from '@salesforce/apex/ContactManager.fetchAllContacts';
import {NavigationMixin} from 'lightning/navigation';
export default class ContactMasterDisplay extends NavigationMixin(LightningElement) {
     
    @wire(fetchAllContacts) contacts;
    contactId; 
    NavigateToDetails(event){
         this.contactId = event.target.value;
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId: this.contactId,
                objectApiName:'Contact',
                actionName:'view'
            }           
 
        });
    }
}