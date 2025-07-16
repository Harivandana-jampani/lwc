import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';

export default class ShowToastEventMethods extends LightningElement {
    contactObject = CONTACT_OBJECT;
    contactFields = [LAST_NAME, FIRST_NAME, EMAIL_FIELD, PHONE_FIELD];

    handleSuccess() {
        this.showToast('Success', 'Contact created successfully', 'success');
    }

    showToast(title, message, variant = 'info') {
        const evt = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(evt);
    }
}
