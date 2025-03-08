import { LightningElement } from 'lwc';

export default class PractiseGetterandSetter extends LightningElement {
   
    welcomeMessage='Good morning';
    finalMessage;
     
    get message()
    {
        return this.welcomeMessage;
    }
    set message(value){
        this.finalMessage = value.toUpperCase();
    }

    handleChange(event){
        this.message=event.target.value;
    }

}