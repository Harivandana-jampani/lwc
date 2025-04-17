public class invokeApexmethodImperatively {

@AuraEnabled(cacheable=true)
    public static  List<Account> acclist(){
        return [SELECT Id,Name FROM Account ];
    }
}