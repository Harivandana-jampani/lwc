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
}