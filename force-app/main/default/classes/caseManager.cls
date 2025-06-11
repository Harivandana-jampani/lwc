public with sharing class caseManager {
    @AuraEnabled
    public static list<case> fetchCaseDetails(string caseNumber){
        if(string.isNotBlank(caseNumber)){
            string searchCase = '%'+CaseNumber+'%';
            return [Select Id,Account.Name,CaseNumber,IsClosed,Origin,Description,Priority,Subject,Status From CASE where caseNumber like : searchCase];
        }
        else {
            return Null;
        }
    }
    @AuraEnabled
    public static string closeCase(string caseId){
        string message;
        try{
            case cs= new case(Id=caseId);
            cs.status='Closed';
            update cs;
            message='Success';
        }
        catch(Exception ex){
            message = ex.getMessage();
        }
        return message;
    }
}