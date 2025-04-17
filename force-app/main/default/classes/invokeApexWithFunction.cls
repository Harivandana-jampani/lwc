public with sharing class invokeApexWithFunction {
   
@AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts(){
        return [SELECT Id,Name FROM Account ];
    }
}