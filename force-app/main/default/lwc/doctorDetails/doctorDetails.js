import { LightningElement,wire} from 'lwc';
import fetchDocDetails from '@salesforce/apex/DoctorDetails.fetchDocDetails';
export default class DoctorDetails extends LightningElement {
    allDoc;
    errorDoc;
    @wire(fetchDocDetails)
    handleDoctor({error,data}){
        if(data){
            this.allDoc=data;
        }
        else if(error){
            this.errorDoc= error;
        }

    }
}