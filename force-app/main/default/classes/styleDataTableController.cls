public class styleDataTableController {
@AuraEnabled(cacheable=true)
    public static list<Account> getAllAccounts(){
        list<Account> acclist= [Select Id,AnnualRevenue,Industry,Phone From Account limit 5];
        return acclist;
    }
}