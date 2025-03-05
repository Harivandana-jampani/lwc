trigger accountTrigger on Account (before insert, after insert, before update, after update,before delete,after delete) {


// Before Insert 
if(Trigger.isInsert && Trigger.isBefore){
system.debug('before insert trigger.old===>'+trigger.old); // value 
system.debug('before insert trigger.new===>'+trigger.new);

system.debug('before insert trigger.oldMAP===>'+trigger.oldMap); // value 
system.debug('before insert trigger.newMAP===>'+trigger.newMap);
}
// after insert 
if(Trigger.isInsert && Trigger.isafter){

system.debug('after insert trigger.old===>'+trigger.old); // value 
system.debug('after insert trigger.new===>'+trigger.new);

system.debug('after insert trigger.oldMAP===>'+trigger.oldMap); // value 
system.debug('after insert trigger.newMAP===>'+trigger.newMap);
}


// before update
if(Trigger.isUpdate && Trigger.isBefore){
system.debug('before update trigger.old===>'+trigger.old); // value 
system.debug('before update trigger.new===>'+trigger.new);
}

// after update 
if(Trigger.isUpdate && Trigger.isafter){
system.debug('after update trigger.old===>'+trigger.old); // value 
system.debug('after update trigger.new===>'+trigger.new);
}

// before update 
if(Trigger.isUpdate && Trigger.isbefore){
system.debug('before update trigger.old===>'+trigger.old); // value 
system.debug(' beforre update trigger.new===>'+trigger.new);
}

// after delete
if(Trigger.isdelete && Trigger.isafter){
system.debug('after delete trigger.old===>'+trigger.old); // value 
system.debug('after delete trigger.new===>'+trigger.new);
}



/*
if(Trigger.isInsert == true ){

    // before logic 
    if(Trigger.isBefore){
    
            for(Account acc: trigger.New){ // trigger new version account records 
            
            system.debug('before if acc.Active__c===>'+acc.Active__c);
            
                if(acc.Active__c == null){
                
                system.debug('after If acc.Active__c===>'+acc.Active__c);
                    acc.Active__c = 'Yes';
                
                }
            
            }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }
    }
    // after logic 
    if(Trigger.isAfter){
    }

if(Trigger.isupdate == true){


   if(Trigger.IsBefore){
      
      
      for(Account acc : trigger.new){
      
       system.debug('before if acc.Has_Support_Plan__c===>'+acc.Has_Support_Plan__c);
       
      if(acc.Active__c == 'yes'){
      
       system.debug('after if acc.Has_Support_Plan__c===>'+acc.Has_Support_Plan__c);
        
        acc.Has_Support_Plan__c= true;
         }
          
      }
   
   }


 if(Trigger.isAfter){
    }


}8*/
}