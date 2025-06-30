import { LightningElement } from 'lwc';

export default class ChildComponentEvent extends LightningElement {
    handleChange(event){
        const msg= event.target.value;
        const custEvent = new CustomEvent('mycustomevent',{detail:msg});
        this.dispatchEvent(custEvent);
    }
}