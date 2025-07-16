
import { LightningElement,wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactSearch.getContacts';

export default class SearchBoxUsingInput extends LightningElement {
    searchId;
    errorDetails;
    contacts;
    columns;

    columns=[
        {label:'Id',fieldName:'Id'},
        {label:'FirstName',fieldName:'FirstName'},
        {label:'lastName',fieldName:'LastName'},
        {label:'Phone',fieldName:'Phone'},
        {label:'Email',fieldName:'Email'}

    ];
    handleSearchId(event){
        this.searchId=event.target.value;
    }
    @wire(getContacts,{SearchConId:'$searchId'})
    wiredContacts({error,data}){
        if(data){
            this.contacts=data;
        }
        else if(error){
            this.errorDetails=error;
        }
    }
}