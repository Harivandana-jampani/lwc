import { LightningElement ,wire} from 'lwc';
import fetchAllContacts from '@salesforce/apex/ContactManager.fetchAllContacts';
import {NavigationMixin} from 'lightning/navigation';
import getAllAccounts from '@salesforce/apex/ContactManager.getAllAccounts';
export default class ContactMasterDisplay extends NavigationMixin(LightningElement) {
     selectedAccount;
     accountOptions=[];
     errorDetails;
     @wire(getAllAccounts)
        accountProcess({error,data}){
            if(data){
                this.errorDetails=undefined;
                for(var i=0;i<data.length;i++){
                    this.accountOptions= [...this.accountOptions,{value:data[i].Id,label:data[i].Name}];
                }// nosure
            }
            else if(error){
                this.data=undefined;
                this.errorDetails = error;
            }
     }
     accountNameChange(event){
        this.selectedAccount =event.detail.value;
     }
    @wire(fetchAllContacts,{accountId:'$selectedAccount'}) contacts; // null 
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