public class AccounctBatch implements Database.Batchable <SObject>{
    public  Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator('Select Id,Name,Ownership from Account');
        
    }
    public void execute(Database.BatchableContext Bc,List<Account> acclist){
        if(acclist.size()>0){
            for(Account Acc : Acclist){
                acc.ownership = 'private';
            }
            update acclist;
        }
        
    }
    public void finish(Database.BatchableContext Bc){
        AsyncApexJob jobDetails = [Select id,Status,ExtendedStatus,NumberOfErrors,TotalJobItems,
                                  JobItemsProcessed,createdBy.Email from AsyncApexJob 
                                  where id=: bc.getJobId()];
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
        string[] toAddress = new String[]{jobDetails.CreatedBy.Email};
        message.setToAddresses(toAddress);
        message.setSubject('Account Batch'+ jobDetails.Status);
        message.setPlainTextBody('Records processed'+ jobdetails.TotalJobItems + 'with'+ jobDetails.NumberOfErrors+'Failure');
        messaging.sendEmail(new Messaging.SingleEmailMessage[]{message});
    }

}