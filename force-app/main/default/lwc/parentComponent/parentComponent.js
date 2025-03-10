import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    message;
    handlereceivedData(event){
        this.message = event.detail;
        console.log(event.detail);
    }
}