import { LightningElement } from 'lwc';

export default class PComponent extends LightningElement {
    Message;
    handleEvent(event){
        const childMessage=event.detail;
        this.Message=childMessage;
    }
}