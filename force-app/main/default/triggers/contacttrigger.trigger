trigger contacttrigger on Contact (before Insert,before update,before delete) {

if(trigger.isbefore && trigger.isInsert){
triggerhandler.insertcontact(trigger.new);
}   
if(trigger.isbefore && trigger.isupdate){
triggerhandler.updatecontact(trigger.new,trigger.oldmap);
system.debug('====>calling before update trigger');
}  
if(trigger.isbefore && trigger.isdelete){
triggerhandler.deletecontact(trigger.old);
}
     
}