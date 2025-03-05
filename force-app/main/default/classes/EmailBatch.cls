public class EmailBatch implements database.batchable<Sobject>,database.stateful{
    public integer contactRecordProcessed=0;
    public Database.QueryLocator start(database.batchablecontext bc){
        return database.getquerylocator('select id,BillingCity,BillingStreet,BillingPostalCode,BillingState,(select id,MailingCity,MailingStreet,MailingPostalCode,MailingState from contacts)from account');
    }
    public void execute(database.batchablecontext bc,list<account> accountlist){
        list<contact> conlist=new list<contact>();
         system.debug('previouscontactRecordProcessed'+ contactRecordProcessed);
        if(accountlist.size()>0){
            for(account acc:accountlist){
                for(contact con:acc.contacts){
                   con.MailingCity = acc.Billingcity;
                   con.MailingStreet = acc.BillingStreet;
                   con.MailingPostalCode = acc.BillingPostalCode;
                   con.MailingState = acc.BillingState;
                    conlist.add(con);
                    contactRecordProcessed = contactRecordProcessed+1;
                }
            }
            system.debug('contactRecordProcessed'+ contactRecordProcessed);
            update conlist;
        }  
    }
    public void finish(database.batchablecontext bc){
        
    }
}