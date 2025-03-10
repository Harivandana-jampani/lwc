import { LightningElement } from 'lwc';

export default class PractiseChild extends LightningElement {
    handleClick(){
        this.dispatchEvent(new CustomEvent('rows',{detail:'hii vandhu'}));
    }
}