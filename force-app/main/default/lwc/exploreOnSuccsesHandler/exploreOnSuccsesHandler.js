import { api, LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ExploreOnSuccsesHandler extends LightningElement {
    @ api recordId;
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