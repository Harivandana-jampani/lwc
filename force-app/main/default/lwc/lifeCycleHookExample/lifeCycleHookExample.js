import { LightningElement } from 'lwc';

export default class LifeCycleHookExample extends LightningElement {
     message = 'welcome';
    constructor(){
        super();
        this.message = this.message +'to component lifecycle';
        console.log('executing Constructor');
    }
    connectedCallback(){
        console.log('executing connected callback');
    }
    disconnectedCallback(){
        console.log('executing disconnected callback');
    }
    renderedCallback(){
        console.log('executing rendered callback');
    }
    errorCallback(error,stack){
        console.log('executing error callback');
    }
}