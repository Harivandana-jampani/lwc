public class triggerhandler{
 public static void insertcontact(list<contact> conlist){
  for(contact con : conlist){
  con.Languages__c='english';
  con.MobilePhone='8639062400';
  con.description='successfully inserted contact';
  }
 }
 public static void updatecontact(list<contact> conlist ,map<id,contact> oldcontactmap){
 for(contact con : conlist){
 con.Languages__c='successfully updated contact===>'+UserInfo.getusername();
 } 
 }
 public static void deletecontact(list<contact> conlist)
 {
    for(contact con:conlist){
    if(con.accountId==null){
    con.addError('you are not authorised to delete');
    }
    }
 }
}