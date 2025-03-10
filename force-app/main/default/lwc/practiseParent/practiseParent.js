import { LightningElement } from 'lwc';

export default class PractiseParent extends LightningElement {
   message;
    handleRows(event){

       this.message=event.detail;
       console.log( this.message);
    }
}