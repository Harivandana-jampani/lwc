public class AccountDetailCls {
@AuraEnabled(cacheable=true)
 public static list<AccountWrapperDetail> fetchAccountDetails(){
     list<AccountWrapperDetail> accWrapperList = new list<AccountWrapperDetail>();
    list<Account> acclist = [Select Id,Name,Type,(Select Id from Cases),(Select Id From Contacts),(Select Id from Opportunities) from Account];
     for(Account acc:acclist){
        AccountWrapperDetail accDetail = new AccountWrapperDetail();
         accDetail.accName=acc.Name;
         accDetail.accType=acc.Type;
         accDetail.totalCases=acc.Contacts.size();
         accDetail.totalContacts=acc.Cases.size();
         accDetail.totalOpportunities=acc.Opportunities.size();    
          accWrapperList.add(accDetail);   
     }
     return accWrapperList;     
    }  
    public class AccountWrapperDetail{
        @AuraEnabled
        public String accName;
        @AuraEnabled
        public String accType;
        @AuraEnabled
        public integer totalCases;
        @AuraEnabled
        public integer totalContacts;
        @AuraEnabled
        public integer totalOpportunities;    
    }
}