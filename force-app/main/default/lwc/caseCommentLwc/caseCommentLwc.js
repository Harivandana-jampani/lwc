import { api, LightningElement } from 'lwc';
import addCaseComment from '@salesforce/apex/CaseCommentManager.addCaseComment';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CaseCommentLwc extends LightningElement {
   @api caseRecordId;
    caseCommentBody;
    @api
    setCaseRecordId(cid){
        this.caseRecordId = cid;
         console.log('this.caserecordId'+this.caseRecordId);

    }
    handleChange(event){
        if(event.target.name =='caseCmnt'){
        this.caseCommentBody=event.target.value;
    }
}
    createCaseComment(event){
        console.log('this.caserecordId'+this.caseRecordId);
         console.log('this.caseCommentBody'+this.caseCommentBody);
        addCaseComment({caseId:this.caseRecordId,cBody:this.caseCommentBody})
        .then(result=>{
            const evt = new ShowToastEvent({
                title:'Success',
                message: 'Case Comment Added',
                variant : 'success'
            });
            this.dispatchEvent(evt);
        })
        .catch(error=>{
            const evt = new ShowToastEvent({
                title:'error',
                message: 'Case Comment not Added',
                variant : 'error'
            });
            this.dispatchEvent(evt);
        });
    }
}