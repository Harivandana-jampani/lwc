import { LightningElement ,api} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class EnrollCourses extends NavigationMixin(LightningElement){
    
   @api courseDetailInfo={courseName:"Lightning Web Component",courseDuration:"30 days",courseFee:10000,courseRating:"*****"}

     navigateToCourse(){
            this[NavigationMixin.Navigate]({
             type :'standard__webPage',
                attributes:{
                    url:'https://www.udemy.com/course/lightning-web-component/learn/lecture/18851876#overview'
            }
        });
    }
   }
