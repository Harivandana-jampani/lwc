import { LightningElement,api } from 'lwc';
import name_field from '@salesforce/schema/Account.Name'
import Rating_field from '@salesforce/schema/Account.Rating';
import Industry from '@salesforce/schema/Account.Industry';

export default class ExploreRecordForm extends LightningElement {
    @api recordId;
    fields=[name_field,Rating_field,Industry]
}