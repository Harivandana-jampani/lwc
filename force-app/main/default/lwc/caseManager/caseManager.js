import { LightningElement } from 'lwc';
import fetchCaseDetails from '@salesforce/apex/caseManager.fetchCaseDetails';
import closeCase from '@salesforce/apex/caseManager.closeCase'
export default class CaseManager extends LightningElement {
   searchCaseNumber;
   cases;
   errorDetails;
   showCaseComment;
   caseCloseMessage;
   caseNumberChange(event){
    this.showCaseComment= false;
    this.searchCaseNumber=event.target.value;
    fetchCaseDetails({caseNumber:this.searchCaseNumber})
    .then(result=>{
        this.cases=result;
    })
    .catch(error=>{
        this.errorDetails=error;
    });
   } 
   passCaseToClose(event){
    this.caseId = event.target.name;
    closeCase({caseId:this.caseId})
    .then(result=>{
        this.caseCloseMessage=result;
    })
    .catch(error=>{
        this.errorDetails = error;
    });
   }
   newCommentAdd(event){
    this.showCaseComment=true;
    this.caseId = event.target.name;
    console.log('this.caseId'+this.caseId);
    this.template.querySelector('c-case-comment-lwc').setCaseRecordId(this.caseId);
   }
} 