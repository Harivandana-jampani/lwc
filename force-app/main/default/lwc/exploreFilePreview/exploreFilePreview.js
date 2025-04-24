import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class ExploreFilePreview extends NavigationMixin(LightningElement) {
    handleClick(){
        const previewFiles = {
            type : "standard__namedPage",
            attributes:{
                pageName:"filePreview"
            },
            state: {
                recordIds:'001WU00000s6XDZYA2,001WU00000s6amUYAQ',
                selectedRecordId : '001WU00000s6amUYAQ'
            }
        }
        this[NavigationMixin.Navigate](previewFiles);
    }
}