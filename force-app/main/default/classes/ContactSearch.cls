public class ContactSearch {
  @AuraEnabled(cacheable=true)
    public static list<Contact> getContacts(String SearchConId){
        if(SearchConId != null){
            list<Contact> conlist=[Select Id,LastName,FirstName,Phone,Email from Contact where LastName Like :'%' + SearchConId + '%'];
        return conlist;
        }
        else
        {
            return null;
        }
    }
}