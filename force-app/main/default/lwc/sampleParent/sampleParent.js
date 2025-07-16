import { LightningElement } from 'lwc';

export default class SampleParent extends LightningElement {
Msg='';
handleChange(event){
    this.Msg=event.target.value;
}
}

