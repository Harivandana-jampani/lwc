public with sharing class DoctorDetails {
    @AuraEnabled(cacheable=true)
    public static list<Doctor__c> fetchDocDetails(){
        list<Doctor__c> docList =[Select Id,Name,doc_Mobileno__c,Doctor_Specialist__c,Doc_Email__c from Doctor__c ];
        return docList;
    }
}