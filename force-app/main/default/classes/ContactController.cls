public class ContactController {
 @AuraEnabled
public static list<Contact> getContacts(){
  list<Contact> conList=[SELECT Id,LastName,FirstName,Email,Phone from Contact Limit 10];
  return conList;

}
}