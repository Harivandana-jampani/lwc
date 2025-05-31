import { LightningElement ,api} from 'lwc';

export default class EnrollCourses extends LightningElement {
   @api courseDetailInfo={courseName:"Lightning Web Component",courseDuration:"30 days",courseFee:10000,courseRating:"*****"

    }
}