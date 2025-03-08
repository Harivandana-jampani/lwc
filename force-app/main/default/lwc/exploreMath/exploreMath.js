import { LightningElement ,api} from 'lwc';

export default class ExploreMath extends LightningElement {
     totalTaxAmounts;
    @api calculate(ta,tp){
         
        this.totalTaxAmounts=(ta * tp)/100;
    }
}