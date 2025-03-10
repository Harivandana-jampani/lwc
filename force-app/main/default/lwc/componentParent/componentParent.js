import { LightningElement } from 'lwc';

export default class ComponentParent extends LightningElement {
    handlePrevious(event){
        console.log(event.target);
    }
}