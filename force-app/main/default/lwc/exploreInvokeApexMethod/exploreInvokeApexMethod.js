import { LightningElement,wire } from 'lwc';
import acclist from '@salesforce/apex/invokeApexMethod.acclist';

export default class ExploreInvokeApexMethod extends LightningElement {

    @wire(acclist) Acc;
}