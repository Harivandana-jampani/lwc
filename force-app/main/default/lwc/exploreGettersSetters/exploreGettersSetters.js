import { LightningElement,track } from 'lwc';

export default class ExploreGettersSetters extends LightningElement {
    welcomeMessage='Heyy!! Salesforce casts';
    @track finalMessage;

    get message(){
        return this.welcomeMessage;
    }
    set message(value){
        this.finalMessage=value.toUpperCase();
    }
    
    handlechange(event){
        this.message=event.target.value;
    }
}