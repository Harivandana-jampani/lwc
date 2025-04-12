import { LightningElement,wire,api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'; 
const FIELDS=
    ['Account.Name',
    'Account.Industry',
    'Account.Rating'
    ]
export default class ExploreGetRecordAlternate extends LightningElement {
    @api recordId;

    @wire(getRecord,{recordId:'$recordId',fields:FIELDS}) accRecord;

    get Name(){
        return this.accRecord.data.fields.Name.value;
    }
    get Industry(){
        return this.accRecord.data.fields.Industry.value;
    } 
    get Rating(){
        return this.accRecord.data.fields.Rating.value;
    }
    }

