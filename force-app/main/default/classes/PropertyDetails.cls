public with sharing class PropertyDetails {
    public PropertyDetails() {
    }
    @AuraEnabled(cacheable=true)
    public static list<Propertie__c> getLatestProperty(){
        list<Propertie__c> allPropertyList = new list<Propertie__c>();
        allPropertyList = [SELECT Id,
                                    Additional_Room__c,
                                    Available_From__c,
                                    Carpet_area_sqft__c,
                                    Covered_area_sqft__c,
                                    Electricity_Status__c,
                                    Facing__c,
                                    Floor__c,
                                    For_Bachellor__c,
                                    For_Family__c,
                                    Furnishing_Available__c,
                                    Furnished_Type__c,
                                    Geo_Map__c,
                                    Landmark__c,
                                    Location__c,
                                    Area__c,
                                    street__c,
                                    country__c,
                                    Maintenance_Charge__c,
                                    No_of_Balcony__c,
                                    No_Of_Bath_Room__c,
                                    No_Of_Bed_Room__c,
                                    Property_Description__c,
                                    Property_Main_Image__c,
                                    Property_Owner__c,  
                                    Property_Video_URL__c,                                  
                                    Name,
                                    Rent__c,
                                    Security_Deposit__c,
                                    Status__c,
                                    Verified__c,
                                    Water_Availability__c
                            FROM Propertie__c
                            LIMIT 50
                            ];
        return allPropertyList;
    }
}