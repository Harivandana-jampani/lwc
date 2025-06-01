import { LightningElement } from 'lwc';
import {NavigationMixin } from 'lightning/navigation';
export default class NavigateToNewRecordPage extends NavigationMixin(LightningElement) {

    newAccRecordPage(){
        this[NavigationMixin.Navigate]({
         type :'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName : 'new'
        }
    });
    }
}