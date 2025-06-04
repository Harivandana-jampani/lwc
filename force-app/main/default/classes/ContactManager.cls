public with sharing class ContactManager {
    
    @AuraEnabled(cacheable=true)
    public static  List<Contact> fetchAllContacts(){
        List<Contact> conlist = [Select Id,Name,Phone,Email,Account.Name from Contact LIMIT 10];
        return conlist;

    }
}