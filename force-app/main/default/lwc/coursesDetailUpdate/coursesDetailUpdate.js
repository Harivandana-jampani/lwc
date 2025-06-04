import { LightningElement,api} from 'lwc';

export default class CoursesDetailUpdate extends LightningElement {
    @api courseName="Lightning Web Component";
    @api  courseFee='10000';
    handleFee(event){
        this.courseFee=event.target.value;
    }
    @api updateFee(){
        this.courseFee = parseFloat(this.courseFee)*2; 
    }
}