public class CrudeOperations{
    // creat patient 
        public void createPatientWithanAsscoiatedDoctor(){
           
            Doctor__c objDoc = new Doctor__c();
            objDoc.Doctor_Name__c='ajay';
            insert objDoc;
            
            if(objDoc.Id != null){
               
                Patient__c objp = new patient__c();
                objp.Patient_Name__c='patient1';
                objp.Doctor__c=objDoc.Id;
                insert objp;
                }   
}
}