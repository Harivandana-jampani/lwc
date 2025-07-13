import { LightningElement,api} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class MyPropertyEnquirey extends LightningElement {

    @api propertyId;
    @api objectApiName;
    handleSuccess(event){
        const ent=new ShowToastEvent({
            title:'success',
            message:'Feedback successfully submitted',
            variant:'success'
        });
        this.dispatchEvent(ent);

    }
}