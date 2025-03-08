import { LightningElement } from 'lwc';

export default class PractiseDataBinding extends LightningElement {
    message='hii hello world';

    handleChange(event){
       this.message= event.target.value;
       console.log(this.message);
    }
}