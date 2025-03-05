import { LightningElement } from 'lwc';

export default class ExplreDataBinding extends LightningElement {
    message='Heyy!! salesforce casts'
    handleupdate(event){
       this.message= event.target.value
       console.log(this.message)
    }
}