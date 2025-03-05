trigger opportunityTrigger on Opportunity (after insert) {
if(trigger.isInsert && Trigger.IsAfter){
//oppourtunitytriggerhandler.afterInsertHandle(trigger.new);
}
}