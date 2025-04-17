import fetchContact from '@salesforce/apex/passingParameterstoApex.fetchContact';
import { LightningElement,wire,api} from 'lwc';

export default class ExplorePassingParameters extends LightningElement {
    @api recordId
    @wire(fetchContact,{accountId:'$recordId'}) contacts;

}