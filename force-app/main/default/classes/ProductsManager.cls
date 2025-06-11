public with sharing class ProductsManager {
    @AuraEnabled(Cacheable=true)
    public static list<Product2> getAllProducts(){
        list<Product2> prodlist=[SELECT Id,Name,Family from Product2];
        return prodlist;
    }

}