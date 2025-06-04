import {  api,LightningElement } from 'lwc';

export default class ParentCourseUpdate extends LightningElement {
    @api pCourseName="salesforce"
    @api pCourseFee='4900';

    parentUpdateFee(){
        this.template.querySelector('c-courses-detail-update').updateFee()
    }
}