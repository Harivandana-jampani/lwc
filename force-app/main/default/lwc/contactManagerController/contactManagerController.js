import { LightningElement} from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class ContactManagerController extends LightningElement {
result;
error;
columns;

columns=[
    {label:"Id" ,fieldName:'Id'},
    {label:"FirstName",fieldName:'FirstName'},
    {label:"LastName",fieldName:'LastName'},
    {label:"Email",fieldName:'Email'},
    {label:"Phone",fieldName:'Phone'}
]

connectedCallback(){
    this.fetchContacts();
}

fetchContacts(){
    getContacts()
        .then((data) => {
            this.result=data;
        })
        .catch((error) =>{
            this.error=error;
        })
    }
}