import { LightningElement ,wire} from 'lwc';
import getAllAccounts from '@salesforce/apex/styleDataTableController.getAllAccounts';
const COLUMNS = [
     {label:'Account Name', fieldName:'Name'},
    {label:'Industry', fieldName:'Industry'},
    {label:'Annual Revenue', fieldName:'AnnualRevenue',type:'currency'},
    {label:'Phone', fieldName:'Phone'}
    
]
export default class StyleDataTable extends LightningElement {
    tableData;
    tableColumn=COLUMNS;
    @wire(getAllAccounts)
    accountHandler({data,error}){
        this.tableData=data;
    }

}