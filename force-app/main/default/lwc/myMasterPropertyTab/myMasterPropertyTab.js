import { LightningElement ,api,wire} from 'lwc';
import getDetails from '@salesforce/apex/PropertyDetails.getDetails';
export default class MyMasterPropertyTab extends LightningElement {
    @api propertyId;
    @api propertyFound;
    @api property;
    @wire(getDetails,{propId:'$propertyId'})
    wiredProperties({data,error}){
            if(data){
                this.property=data;
                this.propertyFound=true;
            }
            else if(error){
                this.ShowToast('Error',error.body.message,'error');
            }
        }
    
}