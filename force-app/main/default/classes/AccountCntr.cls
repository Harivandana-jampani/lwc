public class AccountCntr 
{
  // to get all records from account
    public void fetchall()
  {
      list<Account> listacc=new list<account>();
      listacc= [select id,name from account];
      System.debug('listacc->'+listacc);
  }
    //create account
    public void createAccount()
    {
        
        //step-1 create instance for the table where i want to store the data
        Account acc = new Account();
        acc.name='vandhu104';
        acc.Type__c='Internal';
        acc.Phone='9000646040';
        acc.Has_Support_Plan__c=true;
        System.debug('before insert->'+acc.id);
        // before insert logic 
        insert acc;
        // after insert logic 
        
        System.debug('after insert->'+acc.id);
        
        map<id,account> accountmap = new map<id,account>();
        //Create a account and store it in a map
        accountmap.put(acc.id,acc);
        system.debug('acc===>'+acc);
       //Account:{Name=vandhu104, Type__c=Internal, Phone=9000646040, Has_Support_Plan__c=true, Id=001WU00000buj24YAA}
        system.debug('accountmap===>'+accountmap);  
        //accountmap===>{001WU00000bugwwYAA=Account:{Name=vandhu104, Type__c=Internal, Phone=9000646040, Has_Support_Plan__c=true, Id=001WU00000bugwwYAA}}
        system.debug('accountmap.keyset()===>'+accountmap.keyset());  
        //accountmap.keyset()===>{001WU00000bukVtYAI}
         system.debug('accountmap.containskey()===>'+accountmap.containskey(acc.id)); 
        //accountmap.containskey()===>true
         //system.debug('accountmap.containskey()===>'+accountmap.containskey('001WU00000bukVtYA')); 
         
         system.debug('accountmap.get()===>'+accountmap.get(acc.id)); 
        //accountmap.get()===>Account:{Name=vandhu104, Type__c=Internal, Phone=9000646040, Has_Support_Plan__c=true, Id=001WU00000buf3DYAQ}
         system.debug('accountmap.size()===>'+accountmap.size()); 
        //accountmap.size()===>1
        system.debug('accountmap.values()===>'+accountmap.values()); 
       // accountmap.values()===>(Account:{Name=vandhu104, Type__c=Internal, Phone=9000646040, Has_Support_Plan__c=true, Id=001WU00000bulroYAA})
       // accountmap.remove(acc.id);
        //system.debug('accountmap.remove()===>'+ accountmap);
        //accountmap.remove()===>Account:{Name=vandhu104, Type__c=Internal, Phone=9000646040, Has_Support_Plan__c=true, Id=001WU00000bulroYAA}
        system.debug('accountmap.isempty()===>'+ accountmap.isempty());
        //accountmap.isempty()===>false
        accountmap.clear();
        system.debug('accountmap.clear()===>'+ accountmap);
        //DEBUG|accountmap.clear()===>{}
        system.debug('accountmap.isempty()===>'+ accountmap.isempty());
        //accountmap.isempty()===>true
        //
        //
        createUser();
     
    }
    
    // update 
    public void updateAccount(){
        
        // Rule 1: We sholud n't write SOQL Query AND DMLOperations in a For LOOP
        // in Context there is limitation on no of DML Operation can be perforemed 150
       
        
        
       list<Account> listacc= [select id,name,Has_Support_Plan__c from account]; // 100
        
        // need to check each record is Has_Support_Plan__c is checked or unchecked
        
        List<Account> newAccList = New  List<Account>();
        for(Account acc : listacc){ // 100 run 
            
            if(acc.Has_Support_Plan__c == false){
                
                // if the Has_Support_Plan__c plan is false then update it as true.
                
                //Account objAcc = New Account();
                //acc.Id = acc.Id;
                acc.Has_Support_Plan__c = true;
                
                newAccList.add(acc);
                
               // update objAcc; // 100
                
            }
            
        }
        // before update 
        update newAccList; // 1
        
        // after update 
        
        
        
    }
    
    
    // Delete 
    public void deleteaccount(){
        Account acc = [select id,name,Has_Support_Plan__c from account where Id= '001WU00000bBaMDYA0'];
            delete acc;
            
            }  
    
    
    
    // Insert vs Database.Insert 
    
    // Create 10 Account 
    // 
    public void createmultipleAccounts(){
        List<Account> createAccList = New List<Account>();
    
        for(Integer i=0; i<=3; i++){
            
        Account acc = New Account();
        acc.name='vandhu1001'+i;
        acc.Type__c='Internal';
        acc.Phone='9000646040';
        acc.Has_Support_Plan__c=true;
        System.debug('before insert->'+acc.id);
       
            createAccList.add(acc);
            
        }
        
        Account acc1= New Account();
       // acc1.name='vandhu1000';
        acc1.Type__c='Internal';
        acc1.Phone='9000646040';
        acc1.Has_Support_Plan__c=true;
        
        createAccList.add(acc1);
        
          Database.SaveResult[] results = database.insert(createAccList,false);
        
          for (Integer i = 0; i < results.size(); i++) {
            if (results[i].isSuccess()) {
                System.debug('Success: Account was inserted.');
            } else {
                System.debug('Error: ' + results[i].getErrors()[0].getMessage());
            }
        }
        
    }
    
    
    //SOQL LIMIT 
    public void SOQLLIMIT(){
    	for(Integer i=1; i<=101; i++){
            
            list<Account> listAcc = [SELECT Id From Account];
            
        
        
        
        
    	}
        
     
    }
     // creat contact 
        public void createContactWithanAsscoiatedAccount(){
           
            Account objAcc = new Account();
            objAcc.name='acc_2025';
            insert objAcc;
            
            if(objAcc.Id != null){
                
            for(Integer i=0; i<=3; i++){
                Contact objCon = new Contact();
                objCon.LastName='test_2025'+i;
                objCon.AccountId=objAcc.Id;
                insert objCon;
                }
            }
            
            Account objAcc1 = new Account();
            objAcc1.name='acc_JAN_TEST_2025';
            insert objAcc1;
            if(objAcc1.Id != null){
                
            for(Integer i=0; i<=3; i++){
                Contact objCon1 = new Contact();
                objCon1.LastName='test_JAN_TEST_2025'+i;
                objCon1.AccountId=objAcc1.Id;
                insert objCon1;
                }
            }
            
            // map - accountId and assoicated contacts 
            map<String,list<contact>> AccContactMap = new map<string,list<contact>>();
            list<contact> newlist=new list<contact>();
            
            list<contact> newcontlist =[select id,lastname,AccountId,account.name from contact];
            
            for(contact con:newcontlist) {
                
                newlist.add(con);
                
                if(!AccContactMap.containsKey(con.id)){
                    
                    AccContactMap.put(con.Account.name ,newlist);
                        
                    
                    system.debug('AccContactMap===>'+AccContactMap);
                    
                }
            }
             system.debug('final after for AccContactMap===>'+AccContactMap);
            
            
            
        }   
        
    
    
    // create user 
    @future
    public static void createUser(){
         // create user 
      
        
        Profile profile = [SELECT Id FROM Profile WHERE Name = 'Standard User' LIMIT 1];

            // Create a new User instance
            User newUser = new User(
                FirstName = 'John',
                LastName = 'Doe',
                Email = 'vandhu457@457.com',
                Username = 'harivandana4007@jampani.com', // Must be unique in the org
                Alias = 'v457',
                TimeZoneSidKey = 'America/New_York',
                LocaleSidKey = 'en_US',
                EmailEncodingKey = 'UTF-8',
                LanguageLocaleKey = 'en_US',
                ProfileId = profile.Id
            );

            // Insert the new user
            insert newUser;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}