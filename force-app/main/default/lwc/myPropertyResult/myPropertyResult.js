import { LightningElement ,wire,track} from 'lwc';
import getLatestProperty from '@salesforce/apex/PropertyDetails.getLatestProperty';
import getSearchedProperty from '@salesforce/apex/PropertyDetails.getSearchedProperty'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {registerListener,unregisterAllListeners} from 'c/pubSub';
import {CurrentPageReference} from 'lightning/navigation';
import {NavigationMixin} from 'lightning/navigation';
export default class MyPropertyResult extends NavigationMixin(LightningElement){

    @track properties;
    @track propertiesFound;
    @track isOpenOwnerDetails=false;
    @track propOwnerId;
    @track feedBackDetails=false;
    @track propId; 
    @track feedbackPropertyid;
    @track locFilter;
    @track bedRoomFilter;
    @track bathRoomFilter;
    @track maxbudgetFilter;

    @wire(getLatestProperty) 
    wiredProperties({error,data}){
        if(data){
            this.properties=data;
            this.propertiesFound=true;
        }
        else if(error){
            this.ShowToast('Error',error.body.message,'error');
            this.propertiesFound=false;
        }
    }
    ShowToast(title,message,variant){
        const evt = new ShowToastEvent({
            title: title,
            message:message,
            variant:variant,

        });
        this.dispatchEvent(evt);
    }
    ownerDetailsClick(event){
        console.log('Owner button clicked:', event.target.value);
        this.propOwnerId=event.target.value;
        this.isOpenOwnerDetails=true;
    }
    closeOwnerModel(){
        this.isOpenOwnerDetails=false;
    }
    ownerEnquireyclick(event){
        this.feedbackPropertyid=event.target.value;
        this.feedBackDetails=true;
    }
    closeEnquireyModel(){
        this.feedBackDetails=false;
    }
    
    navigateToPropDetails(event){
        this.propId=event.target.value;

        console.log('Inside this.propId'+this.propId);
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__MyProperty360View'
            },
            state: {
                c__PropertyId: this.propId
            }
        });
    }
    @wire(CurrentPageReference) pageRef;
    connectedCallback(){
        registerListener("handleLocFilterChange",this.handleLocFilterChange,this);
        registerListener("handleBedRoomFilterChange",this.handleBedRoomFilterChange,this);
        registerListener("handleBathRoomFilterChange",this.handleBathRoomFilterChange,this);
        registerListener("handleBudgetFilterChange",this.handleBudgetFilterChange,this);
    }
    disconnectedCallback(){
        unregisterAllListeners(this);
        unregisterAllListeners(this);
        unregisterAllListeners(this);
        unregisterAllListeners(this);
    }
    handleLocFilterChange(locChange){
        this.locFilter=locChange;
        getSearchedProperty({
            location:this.locFilter,
            bedroom:this.bedRoomFilter,
            bathroom:this.bathRoomFilter,
            maxbudget:this.maxbudgetFilter
        })
        .then(result=>{
            this.properties=result;
        })
        .catch(error =>{
            this.ShowToast('Error',error.body.message,'error');
        });
    }
    handleBedRoomFilterChange(bedRoomChange){
        this.bedRoomFilter=bedRoomChange;
        getSearchedProperty({
            location:this.locFilter,
            bedroom:this.bedRoomFilter,
            bathroom:this.bathRoomFilter,
            maxbudget:this.maxbudgetFilter
        })
        .then(result=>{
            this.properties=result;
        })
        .catch(error =>{
            this.ShowToast('Error',error.body.message,'error');
        });
    }
    handleBathRoomFilterChange(bathRoomChange){
        this.bathRoomFilter=bathRoomChange;
        getSearchedProperty({
            location:this.locFilter,
            bedroom:this.bedRoomFilter,
            bathroom:this.bathRoomFilter,
            maxbudget:this.maxbudgetFilter
        })
        .then(result=>{
            this.properties=result;
        })
        .catch(error =>{
            this.ShowToast('Error',error.body.message,'error');
        });
    }
    handleBudgetFilterChange(changeMaxBudget){
        this.maxbudgetFilter=changeMaxBudget;
         getSearchedProperty({
            location:this.locFilter,
            bedroom:this.bedRoomFilter,
            bathroom:this.bathRoomFilter,
            maxbudget:this.maxbudgetFilter
        })
        .then(result=>{
            this.properties=result;
        })
        .catch(error =>{
            this.ShowToast('Error',error.body.message,'error');
        });
    }

}