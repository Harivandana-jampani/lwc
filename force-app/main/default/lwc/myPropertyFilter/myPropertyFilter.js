import { LightningElement,track,wire} from 'lwc';
import {fireEvent} from 'c/pubSub';
import {CurrentPageReference} from 'lightning/navigation';
export default class MyPropertyFilter extends LightningElement {
    @track location;
    @track noOfBedRooms;
    @track noOfBathRooms;
    @track maxBudget;

    get locationOptions(){
        return [
            {label:'ALL',value:'ALL'},
            {label:'Bangalore',value:'Bangalore'},
            {label:'Hyderabad',value:'Hyderabad'},
            {label:'chennai',value:'chennai'},
            {label:'mumbai',value:'mumbai'},
            {label:'Bhuvaneshwar',value:'Bhuvaneshwar'},
            {label:'pune',value:'pune'},
        ];
    }

    get bedRoomOptions(){
         return [
            {label:'ALL',value:'ALL'},
            {label:'1',value:'1'},
            {label:'2',value:'2'},
            {label:'3',value:'3'},
            {label:'4',value:'4'},
        ];
    }
    get bathRoomOptions(){
        return [
            {label:'ALL',value:'ALL'},
            {label:'1',value:'1'},
            {label:'2',value:'2'},
            {label:'3',value:'3'},
            {label:'4',value:'4'},
        ];
    }
    @wire(CurrentPageReference) pageRef;
    handleLocationChange(event){
        this.location=event.target.value;
        console.log('location selected as'+this.location);
        fireEvent(this.pageRef,"handleLocFilterChange",this.location);
    }
    handleBedRoomChange(event){
        this.noOfBedRooms=event.target.value;
        console.log('noOfBedRooms selected as'+this.noOfBedRooms);
        fireEvent(this.pageRef,"handleBedRoomFilterChange",this.noOfBedRooms);
    }
    handleBathRoomChange(event){
        this.noOfBathRooms=event.target.value;
        console.log('noOfBathRooms selected as'+this.noOfBathRooms);
        fireEvent(this.pageRef,"handleBathRoomFilterChange",this.noOfBathRooms);
    }
    handleBudgetChange(event){
        this.maxBudget=event.target.value;
        console.log('maxBudget selected as'+this.maxBudget);
        fireEvent(this.pageRef,"handleBudgetFilterChange",this.maxBudget);

    }
}