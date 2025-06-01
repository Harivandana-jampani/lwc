import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToEditAndViewRecordPage extends NavigationMixin(LightningElement) {
    navigateToView(){
        this[NavigationMixin.Navigate]({
         type :'standard__recordPage',
            attributes:{
                recordId:'001WU00000s6fvpYAA',
                objectApiName:'Account',
                actionName : 'view'
        }
    });
}
    navigateToEdit(){
         this[NavigationMixin.Navigate]({
         type :'standard__recordPage',
            attributes:{
                recordId:'001WU00000s6fvpYAA',
                objectApiName:'Account',
                actionName : 'edit'
        }
    });
    }
}