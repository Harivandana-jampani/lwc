import { api, LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ExploreOnSuccsesHandler extends LightningElement {
    @ api recordId;

    handleSubmit(event){
        event.preventDefault();
        const field= event.detail.fields;
        field.Name="hello";
        this.template.querySelector('lightning-record-edit-form').submit(field);
    }
    handleSuccess(event){
        console.log(event);
        const msg = new ShowToastEvent({
            title: 'Success!!',
            message:'record is updated'
        });
        this.dispatchEvent(msg);

    }
    handleError(){
        console.log("Errorr!!!!!!");
    }
}