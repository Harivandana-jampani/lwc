import { LightningElement } from 'lwc';

import Name_Field from '@salesforce/schema/Account.Name';
import Account_Object from '@salesforce/schema/Account';
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ExploreCreateRecord extends LightningElement {
    name = '';
    handleChange(event){
        this.name = event.target.value;
    }
    handleClick(){
        const fields = {};

        fields[Name_Field.fieldApiName] = this.name;

        const recordInput = {
            apiName: Account_Object.objectApiName,
            fields
        };
        createRecord(recordInput)
            .then(account => {
                this.dispatchEvent(
                    new ShowToastEvent({
                    title: 'Success!!',
                    message: account.id,
                    variant: 'success'
                })
            );

            })
            .cactch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                    title:'Error!!',
                    message:error.body.message,
                    variant:'error'
                })
            );

            });
        
    }
}