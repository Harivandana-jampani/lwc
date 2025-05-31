import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class AccessNavigation extends NavigationMixin(LightningElement) {
    navigateToAccountHome(){
    this[NavigationMixin.Navigate]({
            type :'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName : 'home'
            }
        });
 }
}