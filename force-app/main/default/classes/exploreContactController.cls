public class exploreContactController {
   /* @AuraEnabled(cacheable=true)
     public static Contact getRandomContact(){
        return [SELECT Id,FirstName,LastName FROM Contact LIMIT 1];
    }*/
    
    @AuraEnabled (cacheable = true)
    public static Contact getRandomContact(){
        return [SELECT Id,FirstName,LastName FROM Contact LIMIT 1];
    }

}