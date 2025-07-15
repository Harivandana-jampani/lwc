import { LightningElement } from 'lwc';

export default class SampleProgram extends LightningElement {
    msg="heyy salesforce!!";
    handleChange(event){
        this.msg=event.target.value;
    }
}