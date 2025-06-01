import { LightningElement } from 'lwc';
import WelcomeMessage from '@salesforce/label/c.WelcomeMessage';
import Disclaimer from '@salesforce/label/c.Disclaimer';
import Declaration from '@salesforce/label/c.Declaration';
import Test from '@salesforce/label/c.Test';
export default class AccessCustomLabels extends LightningElement {
 label={
    WelcomeMessage,
    Disclaimer,
    Declaration,
    Test
 }
}