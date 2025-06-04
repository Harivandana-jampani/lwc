public with sharing class ContactManager {
    
    @AuraEnabled(cacheable=true)
    public static  List<Contact> fetchAllContacts(String accountId){
        if(string.isNotBlank(accountId)){
        List<Contact> conlist = [Select Id,Name,Phone,Email,Account.Name from Contact Where AccountId=:accountId LIMIT 10];
        return conlist;
        }
        else{
            return null;
        }
    }
    @AuraEnabled(cacheable=true)
    public static list<Account> getAllAccounts(){
        list<Account> acclist = [Select Id,Name from Account LIMIT 5];
        return acclist;
    }
}