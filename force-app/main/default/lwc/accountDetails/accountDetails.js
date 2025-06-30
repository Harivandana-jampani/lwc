import { LightningElement,wire } from 'lwc';
import accountDetails from '@salesforce/apex/AccountDetailCls.fetchAccountDetails';
export default class AccountDetails extends LightningElement {
    errorDetails;
    visibleRecords;
    totalRecords;
    @wire(accountDetails)
    handleAccountDetails({error,data}){
        if(data){
            this.totalRecords = data;
        }
        else if(error){
            this.errorDetails=error;
        }
    }
    updateRecordHandler(event){
        this.visibleRecords=[...event.detail.records];
    }
}