public class featureMethodClass {
    

    public static void testMixedDML() {
        // Create a non-setup object
        Account acc = new Account(Name = 'Test Account');
        insert acc;

        // Create a setup object (User)
        Profile profile = [SELECT Id FROM Profile WHERE Name = 'Standard User' LIMIT 1];
        User newUser = new User(
            FirstName = 'Test',
            LastName = 'User',
            Email = 'testuser@example.com',
            Username = '	harivandana407@jampani.com',
            Alias = 'tuser',
            TimeZoneSidKey = 'America/New_York',
            LocaleSidKey = 'en_US',
            EmailEncodingKey = 'UTF-8',
            LanguageLocaleKey = 'en_US',
            ProfileId = profile.Id
        );

        // Attempt to insert the setup object in the same transaction
        insert newUser;
    }


    
    
}