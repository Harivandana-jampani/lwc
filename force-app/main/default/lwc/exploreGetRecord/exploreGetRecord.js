import { api, LightningElement,wire } from 'lwc';
import Account_Object from '@salesforce/schema/Account';
import Name_Field from '@salesforce/schema/Account.Name';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
export default class ExploreGetRecord extends LightningElement {
    @ api recordId;

    accountObject = Account_Object;

    @wire(getRecord,{recordId:'$recordId',fields:[Name_Field]})
    records;
    get customNameHandler(){
       return this.records.data?'Heyy!! salesfoce casts':'Nahhh';
    }
}