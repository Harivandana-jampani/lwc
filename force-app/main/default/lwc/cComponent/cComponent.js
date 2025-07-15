import { LightningElement } from 'lwc';

export default class CComponent extends LightningElement {
  handleChange(event){
    const msg=event.target.value;

  const custEvent = new CustomEvent('handlecustomevent',{detail:msg});
  this.dispatchEvent(custEvent);
 }
}