import { LightningElement } from 'lwc';

export default class ComponentChild extends LightningElement {
    message;
    handleClick(event){
        this.message = event.target;
        console.log(event.target);
        this.dispatchEvent(new CustomEvent('previous'));
    }
}