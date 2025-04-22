import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class ExploreNavigationMixing extends NavigationMixin(LightningElement) {
    handleClick(){
        const obj={
            type :'standard__recordPage',
            attributes:{
                recordId:'500WU00000guOtwYAE',
                objectApiName:'case',
                actionName:'view'
            }
        };
        this[NavigationMixin.Navigate](obj);
    }
}