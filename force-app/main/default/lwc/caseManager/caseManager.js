import { LightningElement } from 'lwc';
import fetchCaseDetails from '@salesforce/apex/caseManager.fetchCaseDetails';
export default class CaseManager extends LightningElement {
   searchCaseNumber;
   cases;
   errorDetails;
   caseNumberChange(event){
    this.searchCaseNumber=event.target.value;
    fetchCaseDetails({caseNumber:this.searchCaseNumber})
    .then(result=>{
        this.cases=result;
    })
    .catch(error=>{
        this.errorDetails=error;
    });
   } 
}