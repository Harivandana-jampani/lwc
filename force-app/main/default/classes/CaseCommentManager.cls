public with sharing class CaseCommentManager {
    
    @AuraEnabled
    public static String addCaseComment(String caseId,String cBody){
        if(String.isNotBlank(caseId) && String.isNotBlank(cBody)){
            CaseComment com = new CaseComment(parentId=caseId,CommentBody=cBody);
            insert com;
        }
        return 'success';
    }
}