//create a single account
public class AccountCntrCreate {
    public void createAccount(){
         
        Account acc = new Account();
        
        acc.name='bharadwaj';
        acc.Type='hot';
        acc.Industry='prospect';
         
          insert acc;
        
        System.debug('create account:'+ acc.Id);
    }
    //create a contact associated with account
    public void createConwithAcc(){
        
        Account accobj=new Account();
        accobj.name = 'acctest';
        insert accobj;
        
        contact objcon = new contact();
        objcon.LastName='jampani';
        objcon.AccountId=accobj.Id;
        insert objcon;
        
        system.debug('create contact:'+ objcon.Id);
        system.debug('create account:'+ accobj.Id);
    }
 //create a multiple records
    public void multipleaccounts(){
        list<account> acclist= new list<Account>();
        for(integer i=1;i<=10;i++){
        account acc = new account();
        acc.name='test1'+i;
        acc.Rating='Cold';
        acc.Industry='prospect';
            acclist.add(acc);
        }
        insert acclist;
         //stem.debug('after insert:'+acclist.id);
    }
}