import { LightningElement } from 'lwc';

export default class ParentComponentList extends LightningElement {
    Message;
    constructor(){
        super();
        this.template.addEventListener('handlecustomevent',this.handleEvent.bind(this));
    }
        handleEvent(event){
            const childmsg=event.detail;
            this.Message=childmsg;
        
    }
}